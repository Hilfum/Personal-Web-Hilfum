import React, { useState } from 'react';
import { FaExternalLinkAlt, FaTimes, FaCode, FaFigma, FaPalette, FaBriefcase, FaGamepad } from 'react-icons/fa';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const filters = [
    { id: 'all', label: 'Semua Projek' },
    { id: 'web', label: 'Web Dev' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'grafis', label: 'Desain Grafis' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Website Portal Universitas Halu Oleo (Redesign Concept)',
      category: 'web',
      categoryLabel: 'Web Development',
      shortDesc: 'Desain ulang frontend portal akademik UHO dengan arsitektur SPA menggunakan React.js.',
      longDesc: 'Proyek ini bertujuan meningkatkan aksesibilitas dan user experience portal akademik mahasiswa Universitas Halu Oleo. Menggunakan React.js dan CSS Variables untuk arsitektur Single Page Application yang cepat, intuitif, dan responsif. Menyertakan visual dashboard yang canggih dengan dynamic charts.',
      image: '/assets/flat_design.jpg',
      tags: ['React.js', 'Vite', 'CSS Grid/Flex', 'SPA Layout'],
      icon: <FaCode />,
      link: 'https://github.com/hilfum'
    },
    {
      id: 2,
      title: 'Mobile E-Commerce App UI/UX Design',
      category: 'uiux',
      categoryLabel: 'UI/UX Design',
      shortDesc: 'Desain interface aplikasi e-commerce lokal berbasis mobile dengan fokus pada kegunaan dan alur checkout.',
      longDesc: 'Riset mendalam menggunakan metode Design Thinking. Menghasilkan wireframe low-fidelity hingga high-fidelity mockup yang estetik di Figma. Dilengkapi dengan micro-interactions, navigasi melingkar yang futuristik, dan proses checkout 3-langkah yang meminimalisasi tingkat keranjang belanja terabaikan.',
      image: '/assets/vector_art.jpg',
      tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      icon: <FaFigma />,
      link: 'https://figma.com'
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
      link: 'https://instagram.com/abdlhnnif/'
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
      link: 'https://github.com/hilfum'
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
      link: 'https://youtube.com'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-section fade-in">
      <h3 className="section-title">Portofolio Projek</h3>
      
      {/* Category Filter Tabs */}
      <div className="portfolio-filters glass-panel">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
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
            onClick={() => setSelectedProject(project)}
            onMouseMove={handleCardMouseMove}
          >
            <div className="portfolio-img-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img" 
              />
              <div className="portfolio-overlay">
                <span className="view-details-txt">Lihat Detail Projek</span>
              </div>
              <div className="portfolio-cat-badge">
                {project.icon} {project.categoryLabel}
              </div>
            </div>
            
            <div className="portfolio-details">
              <h4 className="portfolio-card-title">{project.title}</h4>
              <p className="portfolio-card-desc">{project.shortDesc}</p>
              
              <div className="portfolio-tech-tags">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
                {project.tags.length > 3 && (
                  <span className="tech-tag-more">+{project.tags.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal Popup */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel fade-in" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup detail projek"
            >
              <FaTimes />
            </button>
            
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
                  {selectedProject.icon} {selectedProject.categoryLabel}
                </span>
                <h4 className="modal-title">{selectedProject.title}</h4>
                <p className="modal-desc">{selectedProject.longDesc}</p>
                
                <div className="modal-tech-section">
                  <h5>Teknologi & Tools:</h5>
                  <div className="modal-tech-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-action-btn"
                  >
                    Kunjungi Projek <FaExternalLinkAlt size={12} />
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
