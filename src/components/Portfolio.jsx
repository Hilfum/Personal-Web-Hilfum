import React, { useState } from 'react';
import { playMenuSelectSound, playSuccessSound } from '../utils/audio';
import { FaExternalLinkAlt, FaTimes, FaCode, FaFigma, FaPalette, FaBriefcase, FaGamepad } from 'react-icons/fa';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL SLOTS' },
    { id: 'web', label: 'WEB DEV' },
    { id: 'uiux', label: 'UI/UX DESIGN' },
    { id: 'grafis', label: 'DESAIN GRAFIS' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Website Portal Universitas Halu Oleo (Redesign Concept)',
      category: 'web',
      categoryLabel: 'Web Development',
      shortDesc: 'Desain ulang frontend portal akademik UHO dengan arsitektur SPA menggunakan React.js.',
      longDesc: 'Proyek ini bertujuan meningkatkan aksesibilitas dan user experience portal akademik mahasiswa Universitas Halu Oleo. Menggunakan React.js dan CSS Variables untuk arsitektur Single Page Application yang cepat, intuitif, dan responsif. Menyertakan visual dashboard yang canggih dengan KHS dan KRS.',
      image: '/assets/flat_design.jpg',
      tags: ['React.js', 'Vite', 'CSS Grid/Flex', 'SPA Layout'],
      icon: <FaCode />,
      link: 'https://github.com/hilfum',
      progress: 95,
      year: '2024'
    },
    {
      id: 2,
      title: 'Mobile E-Commerce App UI/UX Design',
      category: 'uiux',
      categoryLabel: 'UI/UX Design',
      shortDesc: 'Desain interface aplikasi e-commerce lokal berbasis mobile dengan fokus pada kegunaan dan alur checkout.',
      longDesc: 'Riset mendalam menggunakan metode Design Thinking. Menghasilkan wireframe low-fidelity hingga high-fidelity mockup yang estetik di Figma. Dilengkapi dengan micro-interactions, navigasi melingkar yang futuristik, dan proses checkout 3-langkah yang meminimalisasi keranjang terabaikan.',
      image: '/assets/vector_art.jpg',
      tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      icon: <FaFigma />,
      link: 'https://figma.com',
      progress: 100,
      year: '2024'
    },
    {
      id: 3,
      title: 'Brand Identity & Mascot Hilfum',
      category: 'grafis',
      categoryLabel: 'Desain Grafis',
      shortDesc: 'Sistem identitas visual branding, logo modern, dan maskot vektor bertema teknologi futuristik.',
      longDesc: 'Mengembangkan identitas visual personal brand "hilfum". Konsep logo menggabungkan inisial huruf dengan elemen sirkuit digital dan sayap. Dikerjakan menggunakan Adobe Illustrator dengan format vektor SVG sehingga tetap tajam pada resolusi apapun.',
      image: '/assets/vector_art.jpg',
      tags: ['Adobe Illustrator', 'Branding', 'Vector Art', 'Logo Design'],
      icon: <FaPalette />,
      link: 'https://instagram.com/abdlhnnif/',
      progress: 100,
      year: '2024'
    },
    {
      id: 4,
      title: '2D Game Asset: Pixel Art Pack',
      category: 'grafis',
      categoryLabel: 'Desain Grafis',
      shortDesc: 'Kumpulan aset grafis game 2D bertema Cyberpunk Platformer dengan detail pixel-by-pixel yang presisi.',
      longDesc: 'Aset game retro bergaya 16-bit. Mencakup lembar sprite karakter (lari, lompat, menyerang), ubin lingkungan (tilesets), dan objek latar belakang. Dibuat menggunakan Aseprite dengan palet warna neon cyberpunk yang harmonis.',
      image: '/assets/pixel_art.jpg',
      tags: ['Aseprite', 'Pixel Art', 'Game Design', '16-Bit Style'],
      icon: <FaGamepad />,
      link: 'https://github.com/hilfum',
      progress: 100,
      year: '2024'
    },
    {
      id: 5,
      title: 'Fantasy Digital Oil Painting',
      category: 'grafis',
      categoryLabel: 'Desain Grafis',
      shortDesc: 'Lukisan digital bertekstur cat minyak bertema lanskap fantasi surealis dengan pencahayaan dramatis.',
      longDesc: 'Karya ilustrasi digital yang menggabungkan teknik sapuan kuas tradisional dengan fleksibilitas digital layer. Fosil dan kastil kuno diselimuti aurora mistis, memanfaatkan kontras cahaya dramatis (Chiaroscuro) untuk membangkitkan suasana megah.',
      image: '/assets/digital_painting.jpg',
      tags: ['Photoshop', 'Digital Painting', 'Concept Art', 'Color Grading'],
      icon: <FaPalette />,
      link: 'https://youtube.com',
      progress: 100,
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Helper to draw mini progress bar: [████░░░]
  const renderMiniBar = (progress) => {
    const filled = Math.round(progress / 20); // 5 blocks max
    const empty = 5 - filled;
    return (
      <span style={{ fontFamily: 'monospace', letterSpacing: '1px', color: 'var(--accent-cyan)' }}>
        [{'█'.repeat(filled)}{'░'.repeat(empty)}]
      </span>
    );
  };

  return (
    <div className="portfolio-section fade-in">
      <h3 className="section-title">LOAD GAME — SELECT SAVE FILE</h3>
      
      {/* Category Filter Tabs */}
      <div className="portfolio-filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => {
              playMenuSelectSound();
              setActiveFilter(filter.id);
            }}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="portfolio-card glass-panel"
            onClick={() => {
              playSuccessSound();
              setSelectedProject(project);
            }}
            style={{ padding: '0px', overflow: 'hidden', background: 'var(--bg-secondary)' }}
          >
            {/* Header Slot Title */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '6px 12px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              color: 'var(--accent-cyan)',
              borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>SAVE SLOT 0{project.id}</span>
              <span>{project.year}</span>
            </div>

            <div className="portfolio-img-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img" 
              />
              <div className="portfolio-overlay">
                <span className="view-details-txt">[ LOAD FILE ]</span>
              </div>
              <div className="portfolio-cat-badge">
                {project.categoryLabel.toUpperCase()}
              </div>
            </div>
            
            <div className="portfolio-details">
              <h4 className="portfolio-card-title" style={{ color: 'var(--text-primary)' }}>
                {project.title.toUpperCase()}
              </h4>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-retro)',
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                marginTop: '4px'
              }}>
                <span>PROGRESS:</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {renderMiniBar(project.progress)}
                  <span style={{ color: 'var(--text-primary)' }}>{project.progress}%</span>
                </div>
              </div>

              <div className="portfolio-tech-tags" style={{ marginTop: '8px' }}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal Popup */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel fade-in" onClick={e => e.stopPropagation()} style={{ border: '4px double var(--accent-cyan)' }}>
            <button 
              className="modal-close-btn" 
              onClick={() => {
                playMenuSelectSound();
                setSelectedProject(null);
              }}
              aria-label="Tutup detail projek"
            >
              <FaTimes />
            </button>

            {/* Load File title */}
            <div style={{
              textAlign: 'center',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: 'var(--accent-cyan)',
              marginBottom: '20px',
              borderBottom: '2px dashed rgba(255,255,255,0.1)',
              paddingBottom: '10px'
            }}>
              LOAD FILE CONFIGURATION: SLOT 0{selectedProject.id}
            </div>
            
            <div className="modal-content-grid">
              <div className="modal-img-container">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="modal-img" 
                />
              </div>
              
              <div className="modal-info-container">
                <span className="modal-cat-tag">
                  {selectedProject.categoryLabel.toUpperCase()}
                </span>
                <h4 className="modal-title" style={{ fontSize: '1.25rem' }}>{selectedProject.title.toUpperCase()}</h4>
                <p className="modal-desc" style={{ fontFamily: 'inherit', fontSize: '0.88rem' }}>{selectedProject.longDesc}</p>
                
                <div className="modal-tech-section">
                  <h5 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>TEKNOLOGI & TOOLS:</h5>
                  <div className="modal-tech-tags" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions" style={{ marginTop: '12px' }}>
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-action-btn action-btn primary"
                    onClick={() => playSuccessSound()}
                    style={{ textDecoration: 'none', display: 'inline-flex', width: '100%', justifyContent: 'center' }}
                  >
                    RUN PROJEK <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
