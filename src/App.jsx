import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Now from './components/Now';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Particles from './components/Particles';
import ThemeSwitcher from './components/ThemeSwitcher';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { playClickSound, playMenuSelectSound, playSuccessSound, startBGM, stopBGM, initAudio, setBGMVolume, setSFXVolume, getBGMVolume, getSFXVolume } from './utils/audio';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('loading'); // 'loading' | 'title' | 'game'
  const [activeTab, setActiveTab] = useState('about'); // active menu tab
  const [isMuted, setIsMuted] = useState(true);
  const [bgmVolumeLocal, setBgmVolumeLocal] = useState(() => getBGMVolume());
  const [sfxVolumeLocal, setSfxVolumeLocal] = useState(() => getSFXVolume());
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hilfum-theme') || 'default';
  });

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme === 'default' ? '' : theme;
    localStorage.setItem('hilfum-theme', theme);
  }, [theme]);

  // Initialize Audio Context on first click or touch interaction (bypasses browser autoplay block)
  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Fake Loading Timer
  useEffect(() => {
    if (gameState === 'loading') {
      const timer = setTimeout(() => {
        setGameState('title');
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  // Handle BGM playback based on mute status and game state
  useEffect(() => {
    if (gameState === 'title' || gameState === 'game') {
      if (!isMuted) {
        startBGM();
      } else {
        stopBGM();
      }
    } else {
      stopBGM();
    }
    return () => stopBGM();
  }, [isMuted, gameState]);

  const navItems = [
    { id: 'about', label: 'NEW GAME', desc: 'Profil & Bio' },
    { id: 'portfolio', label: 'LOAD GAME', desc: 'Save Slot Projek' },
    { id: 'skills', label: 'SKILLS TREE', desc: 'Tech Stack & Alat' },
    { id: 'timeline', label: 'QUEST LOG', desc: 'Misi Pendidikan' },
    { id: 'now', label: 'STATUS: NOW', desc: 'Aktivitas Terkini' },
    { id: 'blog', label: 'DEV LOGS', desc: 'Artikel & Catatan' },
    { id: 'contact', label: 'CONNECT', desc: 'Kirim Pesan' }
  ];

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <Portfolio />;
      case 'timeline':
        return <Timeline />;
      case 'now':
        return <Now />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  // Dynamic particle color based on current theme
  const getParticleColors = () => {
    switch (theme) {
      case 'dracula':
        return {
          particle: 'rgba(80, 250, 123, 0.25)', // Dracula green
          line: 'rgba(189, 147, 249, 0.08)'     // Dracula purple
        };
      case 'nord':
        return {
          particle: 'rgba(136, 192, 208, 0.25)', // Nord cyan
          line: 'rgba(129, 161, 193, 0.08)'      // Nord blue
        };
      case 'solarized':
        return {
          particle: 'rgba(42, 161, 152, 0.25)',  // Solarized teal
          line: 'rgba(38, 139, 210, 0.08)'       // Solarized blue
        };
      case 'default':
      default:
        return {
          particle: 'rgba(0, 255, 204, 0.25)',   // Retro neon cyan
          line: 'rgba(0, 255, 204, 0.08)'        // Retro neon cyan line
        };
    }
  };

  const particleConfig = getParticleColors();

  // 1. Loading Screen Render
  if (gameState === 'loading') {
    return (
      <div className="fake-loading-container">
        <div className="bg-ambient-layer" aria-hidden="true" />
        <div className="loading-text">LOADING SYSTEM...</div>
        <div className="loading-bar-outer">
          <div className="loading-bar-inner"></div>
        </div>
      </div>
    );
  }

  // 2. Title Screen Render
  if (gameState === 'title') {
    return (
      <div className="title-screen-container">
        <div className="bg-ambient-layer" aria-hidden="true" />
        {/* Particle background */}
        <Particles 
          particleCount={50} 
          particleColor={particleConfig.particle} 
          lineColor={particleConfig.line} 
          maxDistance={120} 
          speed={0.3} 
        />
        
        <header className="title-screen-header">
          <button 
            className="bgm-toggle-btn"
            onClick={() => {
              playMenuSelectSound();
              setIsMuted(!isMuted);
            }}
            title={isMuted ? 'Unmute BGM' : 'Mute BGM'}
          >
            {isMuted ? <><FaVolumeMute /> BGM: OFF</> : <><FaVolumeUp /> BGM: ON</>}
          </button>
        </header>

        <div className="game-logo-wrapper">
          <h1 className="game-title">HILFUM</h1>
          <div className="game-subtitle">Teknik Informatika S1 · Class of 2022</div>
        </div>

        <button 
          className="press-start-btn"
          onClick={() => {
            playSuccessSound();
            setGameState('game');
            setActiveTab('about'); // Default active tab in game is about (NEW GAME)
            setIsMuted(false); // Automatically start BGM on game play
          }}
        >
          - PRESS START BUTTON -
        </button>

        <div className="copyright-text">
          © {new Date().getFullYear()} HILFUM. ALL RIGHTS RESERVED.
        </div>
      </div>
    );
  }

  // 3. Main Game Layout Render
  return (
    <div className="app-container">
      {/* Background Grid & Particles */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <Particles 
          particleCount={60} 
          particleColor={particleConfig.particle} 
          lineColor={particleConfig.line} 
          maxDistance={110} 
          speed={0.3} 
        />
      </div>

      <div className="game-layout">
        
        {/* Left Side: Retro RPG Menu Panel */}
        <aside className={`retro-menu-panel glass-panel ${activeTab !== 'menu' ? 'hidden' : ''}`}>
          
          {/* Player Stats HUD */}
          <div style={{ borderBottom: '2px solid var(--accent-blue)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
              PLAYER: HILFUM
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-retro)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              <span>LV 22</span>
              <span>HP 999/999</span>
              <span>MP 99/99</span>
            </div>
          </div>

          <div className="retro-menu-title">SELECT OPTION</div>
          
          <nav className="retro-menu-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playMenuSelectSound();
                  setActiveTab(item.id);
                }}
                className={`retro-menu-item ${activeTab === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
            
            {/* Title Screen Switcher */}
            <button
              onClick={() => {
                playMenuSelectSound();
                setGameState('title');
              }}
              className="retro-menu-item"
              style={{ color: 'var(--text-secondary)' }}
            >
              TITLE SCREEN
            </button>
          </nav>

          {/* Audio Options Box */}
          <div style={{ 
            marginTop: '16px', 
            paddingTop: '16px', 
            borderTop: '2px dashed rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', color: 'var(--accent-cyan)' }}>
              SYSTEM SOUND OPTIONS
            </div>

            {/* Mute Toggle */}
            <button
              onClick={() => {
                playMenuSelectSound();
                setIsMuted(!isMuted);
              }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                fontFamily: 'var(--font-retro)',
                fontSize: '1.15rem',
                padding: '8px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                outline: 'none'
              }}
            >
              <span>🔊 BGM STATUS:</span>
              <span style={{ color: isMuted ? 'var(--text-secondary)' : 'var(--accent-cyan)' }}>
                {isMuted ? 'MUTED' : 'PLAYING'}
              </span>
            </button>

            {/* BGM Volume Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                <span>BGM VOL</span>
                <span style={{ color: 'var(--text-primary)' }}>{Math.round(bgmVolumeLocal * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={bgmVolumeLocal * 100}
                onChange={(e) => {
                  const val = parseFloat(e.target.value) / 100;
                  setBGMVolume(val);
                  setBgmVolumeLocal(val);
                  if (val > 0 && isMuted) {
                    setIsMuted(false); // auto unmute when sliding up
                  }
                }}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-cyan)',
                  cursor: 'pointer',
                  height: '6px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '0px'
                }}
              />
            </div>

            {/* SFX Volume Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                <span>SFX VOL</span>
                <span style={{ color: 'var(--text-primary)' }}>{Math.round(sfxVolumeLocal * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sfxVolumeLocal * 100}
                onChange={(e) => {
                  const val = parseFloat(e.target.value) / 100;
                  setSFXVolume(val);
                  setSfxVolumeLocal(val);
                }}
                onMouseUp={() => playClickSound()}
                onTouchEnd={() => playClickSound()}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-cyan)',
                  cursor: 'pointer',
                  height: '6px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '0px'
                }}
              />
            </div>
          </div>
          
        </aside>

        {/* Right Side: Retro RPG Content Dialog Box */}
        <section className={`retro-content-panel glass-panel ${activeTab === 'menu' ? 'hidden' : ''}`} key={activeTab}>
          
          {/* Active dialogue header showing which "screen" or "level" we are on */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--accent-blue)', paddingBottom: '10px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
              {activeTab === 'about' && 'NEW GAME — INTRO'}
              {activeTab === 'portfolio' && 'LOAD GAME — SAVE SLOTS'}
              {activeTab === 'skills' && 'SKILLS TREE — STATUS'}
              {activeTab === 'timeline' && 'QUEST LOG — HISTORY'}
              {activeTab === 'now' && 'MONITOR — NOW'}
              {activeTab === 'blog' && 'DEV LOGS — ARTICLES'}
              {activeTab === 'contact' && 'CONNECT — SAVE PROGRESS'}
            </span>
            <div style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              MAP: {theme.toUpperCase()}
            </div>
          </div>

          {/* Render Active Component */}
          <div className="retro-content-scrollable">
            {renderActivePage()}
          </div>

          {/* Mobile Navigation Back Button */}
          <div className="mobile-back-container">
            <button 
              className="retro-back-btn" 
              onClick={() => {
                playMenuSelectSound();
                setActiveTab('menu');
              }}
            >
              [B] BACK TO MENU
            </button>
          </div>
        </section>
      </div>

      {/* Floating Theme Selector (Level Picker) */}
      <ThemeSwitcher currentTheme={theme} onChangeTheme={setTheme} />

      {/* Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} <span>HILFUM</span>. ALL RIGHTS RESERVED. CHRONO FRAME V1.0.</p>
      </footer>
    </div>
  );
}

export default App;
