import React, { useState, useRef, useEffect } from 'react';
import { playMenuSelectSound } from '../utils/audio';
import { FaCheck } from 'react-icons/fa';

// Helper to render razor-sharp pixel art from text grids
const renderPixelArt = (grid, colors, size = 12) => {
  const rects = [];
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char !== '.' && colors[char]) {
        rects.push(
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={1}
            height={1}
            fill={colors[char]}
          />
        );
      }
    }
  });
  return (
    <svg 
      viewBox={`0 0 ${size} ${size}`} 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'block', 
        shapeRendering: 'crispEdges' 
      }}
    >
      {rects}
    </svg>
  );
};

// Main Toggle Button: Pixel Paint Palette
const renderPaletteIcon = (color) => {
  const grid = [
    "....XXXXXX......",
    "...XWWWWWWX.....",
    "..XWCCWWPPWX....",
    ".XWWCCWWPPWWX...",
    "XWWWWWWWWWWWWX..",
    "XWWNNWWWWWXXWX..",
    "XWWNNWWWWX..XX..",
    "XWWWWWWWX.......",
    "XWWSSWWX........",
    "XWWSSWX.........",
    "XWWWX...........",
    ".XXXX..........."
  ];
  const colors = {
    X: color || 'var(--accent-cyan)',
    W: '#d7a15c', // wood color
    C: '#00ffcc', // space odyssey cyan
    P: '#bd93f9', // dracula purple
    N: '#88c0d0', // nord blue
    S: '#cb4b16'  // solarized orange
  };
  return renderPixelArt(grid, colors, 16);
};

// SPACE ODYSSEY (Default): Pixel Rocket
const renderRocketIcon = (isActive) => {
  const grid = [
    "....X.......",
    "...XCX......",
    "...XCX......",
    "..XWWWX.....",
    "..XWWWX.....",
    "..XWCWX.....",
    ".XWWWWWX....",
    "XWWWCWWWX...",
    "XXWXXXWXX...",
    "..XR.RX.....",
    "..XR.RX.....",
    "...X.X......"
  ];
  const colors = {
    X: isActive ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.4)',
    W: '#ffffff',
    C: '#00ffcc',
    R: '#ff3366'
  };
  return renderPixelArt(grid, colors, 12);
};

// SHADOW CASTLE (Dracula): Pixel Castle
const renderCastleIcon = (isActive) => {
  const grid = [
    "X......X....",
    "XX....XX....",
    "XPX..XPX....",
    "XPXXXXPX....",
    "XPPPPPPX....",
    "XXPPPPXX....",
    ".XPXXPX.....",
    ".XPPPPX.....",
    "XXPKKPXX....",
    "XPPKKPPX....",
    "XPPXXPPX....",
    "XXXXXXXX...."
  ];
  const colors = {
    X: isActive ? '#bd93f9' : 'rgba(255,255,255,0.4)',
    P: '#7b50ba',
    K: '#ff79c6'
  };
  return renderPixelArt(grid, colors, 12);
};

// ICE DUNGEON (Nord): Pixel Snowflake
const renderSnowflakeIcon = (isActive) => {
  const grid = [
    "....X.......",
    ".X..X..X....",
    "..X.X.X.....",
    "...XXX......",
    "XXXXBXXXX...",
    ".XXBBBXX....",
    ".XXBBBXX....",
    "XXXXBXXXX...",
    "...XXX......",
    "..X.X.X.....",
    ".X..X..X....",
    "....X......."
  ];
  const colors = {
    X: isActive ? '#88c0d0' : 'rgba(255,255,255,0.4)',
    B: '#81a1c1'
  };
  return renderPixelArt(grid, colors, 12);
};

// DESERT RUINS (Solarized): Pixel Cactus
const renderCactusIcon = (isActive) => {
  const grid = [
    "...XX.......",
    ".X.XGX.X....",
    "XGXXGXXGX...",
    "XGGXGXGGX...",
    "XGGXGXGGX...",
    ".XGGGGGX....",
    "..XGGGX.....",
    "...XGX......",
    "...XGX......",
    "...XGX......",
    "XXXXGXXXX...",
    "OOOOOOOOO..."
  ];
  const colors = {
    X: isActive ? '#2aa198' : 'rgba(255,255,255,0.4)',
    G: '#859900',
    O: '#cb4b16'
  };
  return renderPixelArt(grid, colors, 12);
};

function ThemeSwitcher({ currentTheme, onChangeTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  const themes = [
    { id: 'default', label: 'SPACE ODYSSEY', color: '#00ffcc', desc: 'Neon Cyan (Default)' },
    { id: 'dracula', label: 'SHADOW CASTLE', color: '#bd93f9', desc: 'Dracula Purple' },
    { id: 'nord', label: 'ICE DUNGEON', color: '#81a1c1', desc: 'Nordic Slate' },
    { id: 'solarized', label: 'DESERT RUINS', color: '#2aa198', desc: 'Warm Teal-Orange' }
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      className={`theme-switcher-wrapper ${isOpen ? 'open' : ''}`} 
      ref={switcherRef}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Theme Option Panel */}
      {isOpen && (
        <div 
          className="theme-panel glass-panel fade-in"
          style={{
            padding: '16px',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            transformOrigin: 'bottom right',
            boxShadow: '6px 6px 0px rgba(0,0,0,0.85)'
          }}
        >
          <h4 style={{ 
            margin: '0 0 6px 0', 
            fontSize: '1.15rem', 
            fontFamily: 'var(--font-retro)', 
            color: 'var(--text-secondary)',
            borderBottom: '1px dashed rgba(255,255,255,0.1)',
            paddingBottom: '4px'
          }}>
            SELECT REGION:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  playMenuSelectSound();
                  onChangeTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`theme-opt-btn ${currentTheme === theme.id ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '8px 10px',
                  background: currentTheme === theme.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  border: '1px solid ' + (currentTheme === theme.id ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.15)'),
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                    {theme.id === 'default' && renderRocketIcon(currentTheme === theme.id)}
                    {theme.id === 'dracula' && renderCastleIcon(currentTheme === theme.id)}
                    {theme.id === 'nord' && renderSnowflakeIcon(currentTheme === theme.id)}
                    {theme.id === 'solarized' && renderCactusIcon(currentTheme === theme.id)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>{theme.label}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-retro)', marginTop: '2px' }}>{theme.desc}</div>
                  </div>
                </div>
                {currentTheme === theme.id && <FaCheck size={8} style={{ color: 'var(--accent-cyan)' }} />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => {
          playMenuSelectSound();
          setIsOpen(!isOpen);
        }}
        className="theme-switcher-toggle glass-panel"
        style={{
          width: '50px',
          height: '50px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: '4px double rgba(255, 255, 255, 0.5)',
          background: 'var(--glass-bg)',
          color: 'var(--accent-cyan)',
          fontSize: '1.2rem',
          boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.7)',
          transition: 'all 0.15s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-cyan)';
          e.currentTarget.style.transform = 'translate(-2px, -2px)';
          e.currentTarget.style.boxShadow = '6px 6px 0px rgba(0, 0, 0, 0.85)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
          e.currentTarget.style.transform = 'translate(0px, 0px)';
          e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 0.7)';
        }}
        aria-label="Ganti Tema Warna (Region)"
      >
        <div style={{ width: '28px', height: '28px' }}>
          {renderPaletteIcon('currentColor')}
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitcher;
