import React from 'react';
import { playMenuSelectSound } from '../utils/audio';
import { FaMapMarkerAlt, FaCode, FaPaintBrush, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function Now() {
  const date = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  const focusData = [
    {
      id: 1,
      icon: <FaGraduationCap style={{ color: 'var(--accent-cyan)' }} />,
      title: 'ACADEMIC MISSION',
      desc: 'Menyelesaikan tahun terakhir di Teknik Informatika S1 Universitas Halu Oleo, Kendari.'
    },
    {
      id: 2,
      icon: <FaCode style={{ color: 'var(--accent-blue)' }} />,
      title: 'CODING MODULE',
      desc: 'Mengeksplorasi ekosistem modern React 19, Vite, dan pustaka animasi interaktif (GSAP, Three.js) untuk menciptakan web premium.'
    },
    {
      id: 3,
      icon: <FaPaintBrush style={{ color: 'var(--accent-purple)' }} />,
      title: 'DESIGN CANVAS',
      desc: 'Merancang aset branding personal, desain vektor di Adobe Illustrator, dan prototipe aplikasi mobile di Figma.'
    }
  ];

  return (
    <div className="now-section fade-in" style={{ width: '100%', maxWidth: '750px', margin: '0 auto' }}>
      <h3 className="section-title">SYSTEM STATUS — NOW</h3>
      
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '-10px', marginBottom: '32px', fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
        INSPIRATION SOURCE: WWW.NOWNOWNOW.COM BY DEREK SIVERS
      </p>

      <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', background: 'var(--bg-secondary)' }}>
        
        {/* Top Header info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '2px solid var(--accent-blue)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontFamily: 'var(--font-retro)', fontSize: '1.25rem' }}>
            <FaMapMarkerAlt style={{ color: 'var(--accent-cyan)' }} />
            <span>RADAR LOC: KENDARI, SULAWESI TENGGARA, ID</span>
          </div>
          <div style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-retro)' }}>
            CLOCK: {date.toUpperCase()}
          </div>
        </div>

        {/* Core details */}
        <div>
          <h4 style={{ fontSize: '1.35rem', fontWeight: 'normal', margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
            CURRENT RUNNING MODULES:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {focusData.map(focus => (
              <div 
                key={focus.id} 
                className="glass-card"
                style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  alignItems: 'flex-start',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{ fontSize: '1.5rem', display: 'flex', padding: '6px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {focus.icon}
                </div>
                <div>
                  <h5 style={{ fontSize: '1.2rem', fontWeight: 'normal', margin: '0 0 6px 0', color: 'var(--accent-cyan)' }}>
                    {focus.title}
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{focus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability CTA */}
        <div 
          style={{ 
            background: 'rgba(0, 255, 204, 0.02)',
            border: '2px dashed var(--accent-blue)',
            padding: '24px',
            textAlign: 'center',
            marginTop: '10px'
          }}
        >
          <h5 style={{ fontSize: '1.25rem', fontWeight: 'normal', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
            CO-OP / FREELANCE STATUS
          </h5>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Saya saat ini terbuka untuk proyek freelance desain UI/UX, desain grafis (vector/branding), atau kolaborasi pengembangan web frontend.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a 
              href="#contact" 
              className="action-btn primary"
              onClick={() => playMenuSelectSound()}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaEnvelope /> INITIATE CONNECTION
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Now;
