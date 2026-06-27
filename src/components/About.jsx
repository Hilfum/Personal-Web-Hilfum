import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaGamepad, FaPenNib, FaBookOpen } from 'react-icons/fa';

function About() {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    // Trigger progress bar animations after component mounts
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    { name: 'Web Programming', level: 55, color: 'linear-gradient(90deg, #3b82f6, #06b6d4)', desc: 'HTML, CSS, JavaScript, React, Vite' },
    { name: 'UI/UX Design', level: 70, color: 'linear-gradient(90deg, #06b6d4, #8b5cf6)', desc: 'Figma, Wireframing, Prototyping, User Research' },
    { name: 'Desain Grafis', level: 85, color: 'linear-gradient(90deg, #8b5cf6, #ec4899)', desc: 'Adobe Illustrator, Photoshop, Vector Art' }
  ];

  return (
    <div className="about-section fade-in">
      
      {/* Intro Grid */}
      <div className="about-intro-grid">
        
        {/* Left Column: Photo Card with premium glass border */}
        <div className="photo-card glass-panel profile-photo-tilt" onMouseMove={handleMouseMove}>
          <div className="about-photo-wrapper">
            <img 
              src="/assets/image.jpeg" 
              alt="Jalaludin Muflih" 
              className="about-photo"
            />
            <div className="photo-overlay"></div>
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="about-info-card glass-panel" onMouseMove={handleMouseMove}>
          <h2>Tentang Saya</h2>
          <p>
            Halo! Nama saya <strong>Jalaludin Muflih</strong>, biasa dipanggil Muflih. 
            Saya lahir di Kendari pada tanggal 8 Agustus 2004. 
            Saat ini, saya adalah Mahasiswa Teknik Informatika, Fakultas Teknik, Universitas Halu Oleo (Angkatan 2022).
          </p>
          <p>
            Minat dan bakat saya berfokus pada dunia IT, khususnya di bidang Desain UI/UX serta Desain Grafis. 
            Saya senang belajar hal baru dan merancang antarmuka digital yang estetis, fungsional, dan interaktif.
          </p>

          <h3 className="hobbies-title">Hobi & Ketertarikan</h3>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <FaMusic className="hobby-icon animate-pulse-slow" />
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

      {/* Education Section */}
      <h3 className="section-title">Riwayat Pendidikan</h3>
      <div className="education-container glass-panel" style={{ padding: '40px', marginBottom: '48px' }} onMouseMove={handleMouseMove}>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2015 - 2017</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SDN 1 Poasia Kendari</h4>
              <p className="timeline-desc">Pendidikan Sekolah Dasar</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017 - 2019</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SMP TQ Muadz Bin Jabal Kendari</h4>
              <p className="timeline-desc">Pendidikan Sekolah Menengah Pertama</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019 - 2022</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SMA TQ Muadz Bin Jabal Kendari</h4>
              <p className="timeline-desc">Pendidikan Sekolah Menengah Atas</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - Sekarang</div>
            <div className="timeline-card timeline-active">
              <h4 className="timeline-school">Universitas Halu Oleo</h4>
              <p className="timeline-major">Teknik Informatika S1 (Angkatan 2022)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h3 className="section-title">Keahlian & Kompetensi</h3>
      <div className="skills-container glass-panel" style={{ padding: '40px' }} onMouseMove={handleMouseMove}>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item ${hoveredSkill === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-info">
                <div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-desc-hint">{skill.desc}</span>
                </div>
                <span className="skill-percentage" style={{ color: hoveredSkill === index ? 'var(--accent-cyan)' : 'inherit' }}>
                  {skill.level}%
                </span>
              </div>
              <div className="skill-track">
                <div 
                  className="skill-bar" 
                  style={{ 
                    width: animateProgress ? `${skill.level}%` : '0%',
                    background: skill.color
                  }}
                >
                  <div className="skill-bar-shine"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default About;
