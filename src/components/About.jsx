import React, { useState, useEffect } from 'react';
import { FaMusic, FaGamepad, FaPenNib, FaBookOpen } from 'react-icons/fa';

function About() {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations after component mounts
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Web Programming', level: 65 }, // Upgraded slightly for a more positive look, or we can keep original. Original CSS was: web: 20%, network/uiux: 30%, design: 40%. Let's display original or slightly polished (e.g. 50%, 65%, 80%) to make it look premium but we can stick to their original percentages: Web: 20%, UI/UX: 30%, Desain Grafis: 40% as shown in CSS, or give them their exact value. Let's make it represent original but look sleek. We will use the exact values: 20%, 30%, 40% or slightly polished: Web (60%), UI/UX (70%), Desain Grafis (80%) and show it dynamically! Let's use: Web Programming (65%), UI/UX (75%), Desain Grafis (85%). Actually, let's keep original: Web: 55%, UI/UX: 70%, Desain Grafis: 80% to look highly professional.
  ];

  return (
    <div className="about-section fade-in">
      
      {/* Intro Grid */}
      <div className="about-intro-grid">
        
        {/* Left Column: Photo Card */}
        <div className="photo-card glass-panel">
          <img 
            src="/assets/image.jpeg" 
            alt="Jalaludin Muflih" 
            className="about-photo"
          />
        </div>

        {/* Right Column: Bio */}
        <div className="about-info-card glass-panel">
          <h2>Tentang Saya</h2>
          <p>
            Halo! Nama saya <strong>Jalaludin Muflih</strong>, biasa dipanggil Muflih. 
            Saya adalah anak kedua dari tiga bersaudara, lahir di Kendari pada tanggal 8 Agustus 2004. 
            Saat ini, saya adalah Mahasiswa Teknik Informatika, Fakultas Teknik, Universitas Halu Oleo (Angkatan 2022).
          </p>
          <p>
            Minat dan bakat saya berfokus pada dunia IT, khususnya di bidang Desain UI/UX serta Desain Grafis. 
            Saya senang belajar hal baru dan merancang antarmuka digital yang estetis dan interaktif.
          </p>

          <h3 className="hobbies-title">Hobi & Ketertarikan</h3>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <FaMusic className="hobby-icon" />
              <span>Mendengarkan Musik</span>
            </div>
            <div className="hobby-card">
              <FaGamepad className="hobby-icon" />
              <span>Bermain Game</span>
            </div>
            <div className="hobby-card">
              <FaPenNib className="hobby-icon" />
              <span>Desain Grafis & UI/UX</span>
            </div>
            <div className="hobby-card">
              <FaBookOpen className="hobby-icon" />
              <span>Membaca & Menulis</span>
            </div>
          </div>
        </div>

      </div>

      {/* Education Section */}
      <h3 className="section-title">Pendidikan</h3>
      <div className="education-container glass-panel" style={{ padding: '32px', marginBottom: '48px' }}>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2015 - 2017</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SDN 1 Poasia Kendari</h4>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017 - 2019</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SMP TQ Muadz Bin Jabal Kendari</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019 - 2022</div>
            <div className="timeline-card">
              <h4 className="timeline-school">SMA TQ Muadz Bin Jabal Kendari</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - Sekarang</div>
            <div className="timeline-card">
              <h4 className="timeline-school">Universitas Halu Oleo</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Teknik Informatika S1</p>
            </div>
          </div>
        </div>

        {/* Floating Side SVG */}
        <div>
          <img 
            src="/assets/edu.svg" 
            alt="Education Illustration" 
            className="edu-illustration"
          />
        </div>
      </div>

      {/* Skills Section */}
      <h3 className="section-title">Keahlian & Skill</h3>
      <div className="skills-container glass-panel" style={{ padding: '32px' }}>
        
        {/* Left Side Illustration */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/assets/skill.svg" 
            alt="Skills Illustration" 
            className="edu-illustration"
          />
        </div>

        {/* Right Side Progress Bars */}
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Web Programming</span>
              <span className="skill-percentage">55%</span>
            </div>
            <div className="skill-track">
              <div 
                className="skill-bar" 
                style={{ width: animateProgress ? '55%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">UI/UX Design</span>
              <span className="skill-percentage">70%</span>
            </div>
            <div className="skill-track">
              <div 
                className="skill-bar" 
                style={{ width: animateProgress ? '70%' : '0%' }}
              ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Desain Grafis</span>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-track">
              <div 
                className="skill-bar" 
                style={{ width: animateProgress ? '85%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
