import React from 'react';
import { playSuccessSound } from '../utils/audio';
import { FaMusic, FaGamepad, FaPenNib, FaBookOpen, FaDownload } from 'react-icons/fa';

function About() {
  return (
    <div className="about-section fade-in">
      
      {/* Intro Grid */}
      <div className="about-intro-grid">
        
        {/* Left Column: Photo Card */}
        <div className="photo-card">
          <div className="about-photo-wrapper">
            <img 
              src="/assets/image.jpeg" 
              alt="Jalaludin Muflih" 
              className="about-photo"
              style={{ filter: 'contrast(1.05) brightness(0.95)' }}
            />
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="about-info-card">
          <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', marginBottom: '8px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
            STATUS WINDOW
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            <p>
              Halo! Nama saya <strong style={{ color: 'var(--text-primary)' }}>Jalaludin Muflih</strong>, biasa dipanggil Muflih. 
              Saya lahir di Kendari pada tanggal 8 Agustus 2004. 
              Saat ini, saya adalah Mahasiswa Teknik Informatika, Fakultas Teknik, Universitas Halu Oleo (Angkatan 2022).
            </p>
            <p>
              Minat dan bakat saya berfokus pada dunia IT, khususnya di bidang Desain UI/UX serta Desain Grafis. 
              Saya senang belajar hal baru dan merancang antarmuka digital yang estetis, fungsional, dan interaktif.
            </p>
          </div>

          {/* Download CV Action Button */}
          <div style={{ margin: '16px 0', display: 'flex' }}>
            <a 
              href="/assets/cv_jalaludin_muflih.pdf" 
              download="CV_Jalaludin_Muflih.pdf"
              className="action-btn primary"
              onClick={() => playSuccessSound()}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaDownload /> UNDUH CV (Curriculum Vitae)
            </a>
          </div>

          <h3 className="hobbies-title">HOBBY & INTERESTS</h3>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <FaMusic className="hobby-icon" />
              <div className="hobby-info">
                <span>Musik</span>
                <span className="hobby-sub">Mendengarkan Musik</span>
              </div>
            </div>
            <div className="hobby-card">
              <FaGamepad className="hobby-icon" />
              <div className="hobby-info">
                <span>Gaming</span>
                <span className="hobby-sub">Bermain Game</span>
              </div>
            </div>
            <div className="hobby-card">
              <FaPenNib className="hobby-icon" />
              <div className="hobby-info">
                <span>Desain</span>
                <span className="hobby-sub">Grafis & UI/UX</span>
              </div>
            </div>
            <div className="hobby-card">
              <FaBookOpen className="hobby-icon" />
              <div className="hobby-info">
                <span>Literasi</span>
                <span className="hobby-sub">Membaca & Menulis</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
