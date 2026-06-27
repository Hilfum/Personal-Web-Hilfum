// src/utils/audio.js - 8-Bit Retro Sound Synthesizer via Web Audio API

let audioCtx = null;
let bgmInterval = null;
let bgmGainNode = null;
let currentNoteIndex = 0;

// Global volume controls (0.0 to 1.0)
let sfxVolume = 0.5;
let bgmVolume = 0.3;

export function getSFXVolume() {
  return sfxVolume;
}

export function getBGMVolume() {
  return bgmVolume;
}

export function setSFXVolume(val) {
  sfxVolume = Math.max(0, Math.min(1, val));
}

export function setBGMVolume(val) {
  bgmVolume = Math.max(0, Math.min(1, val));
  if (bgmGainNode) {
    try {
      const ctx = getAudioContext();
      // Keep BGM volume comfortable (max 0.12 at 1.0 volume)
      bgmGainNode.gain.setValueAtTime(bgmVolume * 0.12, ctx.currentTime);
    } catch (e) {}
  }
}

// Initialize and resume AudioContext on user interaction
export function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Play quick 8-bit retro click/blip sound (for small buttons)
export function playClickSound() {
  if (sfxVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.08 * sfxVolume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

// 2. Play subtle menu selection beep (for tabs/nav)
export function playMenuSelectSound() {
  if (sfxVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(659.25, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.12 * sfxVolume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {}
}

// 3. Play classic NES coin success sound (Double note chime for submissions / downloads)
export function playSuccessSound() {
  if (sfxVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    
    const playNote = (freq, time, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0.08 * sfxVolume, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(time);
      osc.stop(time + duration);
    };
    
    const now = ctx.currentTime;
    playNote(523.25, now, 0.07); // C5
    playNote(659.25, now + 0.07, 0.16); // E5
  } catch (e) {}
}

// POLYPHONIC RPG CHIPTUNE DATA
const bassLine = [
  146.83, 146.83, 174.61, 174.61, // D3, D3, F3, F3
  130.81, 130.81, 196.00, 196.00, // C3, C3, G3, G3
  146.83, 146.83, 174.61, 174.61, // D3, D3, F3, F3
  220.00, 196.00, 174.61, 164.81, // A3, G3, F3, E3
  116.54, 116.54, 146.83, 146.83, // Bb2, Bb2, D3, D3
  130.81, 130.81, 164.81, 164.81, // C3, C3, E3, E3
  146.83, 146.83, 174.61, 174.61, // D3, D3, F3, F3
  220.00, 220.00, 220.00, 220.00  // A3, A3, A3, A3
];

const leadLine = [
  587.33, 0,      698.46, 880.00, // D5, -, F5, A5
  523.25, 0,      587.33, 440.00, // C5, -, D5, A4
  587.33, 698.46, 880.00, 1046.50,// D5, F5, A5, C6
  880.00, 783.99, 698.46, 659.25, // A5, G5, F5, E5
  466.16, 0,      587.33, 698.46, // Bb4, -, D5, F5
  523.25, 0,      659.25, 783.99, // C5, -, E5, G5
  587.33, 0,      698.46, 880.00, // D5, -, F5, A5
  880.00, 0,      880.00, 0       // A5, -, A5, -
];

const NOTE_DURATION = 0.22; // Speed of each note step

// 4. Background Music (BGM) polyphonic playback
export function startBGM() {
  if (bgmInterval) return;
  
  try {
    const ctx = getAudioContext();
    bgmGainNode = ctx.createGain();
    bgmGainNode.gain.setValueAtTime(bgmVolume * 0.12, ctx.currentTime);
    bgmGainNode.connect(ctx.destination);
    
    let nextNoteTime = ctx.currentTime;
    
    const playNextStep = () => {
      // If BGM volume is fully slider muted, don't schedule actual oscillators to save CPU
      if (bgmVolume <= 0) {
        nextNoteTime += NOTE_DURATION;
        currentNoteIndex = (currentNoteIndex + 1) % bassLine.length;
        return;
      }

      const stepIndex = currentNoteIndex % bassLine.length;
      
      // A. Play Bass Track (Triangle Wave)
      const bassFreq = bassLine[stepIndex];
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(bassFreq, nextNoteTime);
      
      bassGain.gain.setValueAtTime(0.6, nextNoteTime);
      bassGain.gain.exponentialRampToValueAtTime(0.01, nextNoteTime + NOTE_DURATION - 0.02);
      
      bassOsc.connect(bassGain);
      bassGain.connect(bgmGainNode);
      
      bassOsc.start(nextNoteTime);
      bassOsc.stop(nextNoteTime + NOTE_DURATION - 0.01);
      
      // B. Play Lead Track (Square Wave)
      const leadFreq = leadLine[stepIndex];
      if (leadFreq > 0) {
        const leadOsc = ctx.createOscillator();
        const leadGain = ctx.createGain();
        
        leadOsc.type = 'square';
        leadOsc.frequency.setValueAtTime(leadFreq, nextNoteTime);
        
        leadGain.gain.setValueAtTime(0.24, nextNoteTime);
        leadGain.gain.exponentialRampToValueAtTime(0.01, nextNoteTime + NOTE_DURATION - 0.03);
        
        leadOsc.connect(leadGain);
        leadGain.connect(bgmGainNode);
        
        leadOsc.start(nextNoteTime);
        leadOsc.stop(nextNoteTime + NOTE_DURATION - 0.01);
      }
      
      nextNoteTime += NOTE_DURATION;
      currentNoteIndex = (currentNoteIndex + 1) % bassLine.length;
    };
    
    // Scheduler loop
    bgmInterval = setInterval(() => {
      const ctx = getAudioContext();
      while (nextNoteTime < ctx.currentTime + 0.15) {
        playNextStep();
      }
    }, 40);
  } catch (e) {
    console.warn('Audio BGM failed to start:', e);
  }
}

export function stopBGM() {
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
  if (bgmGainNode) {
    try {
      bgmGainNode.disconnect();
    } catch (e) {}
    bgmGainNode = null;
  }
}
