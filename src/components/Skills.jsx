import React, { useState, useEffect } from 'react';
import { playMenuSelectSound } from '../utils/audio';
import { FaCode, FaFigma, FaPalette, FaTools, FaLaptopCode } from 'react-icons/fa';

function Skills() {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', label: 'ALL SKILLS', icon: <FaLaptopCode /> },
    { id: 'design', label: 'DESIGN TREE', icon: <FaPalette /> },
    { id: 'dev', label: 'CODING TREE', icon: <FaCode /> }
  ];

  const skillsData = [
    { name: 'UI/UX Design', level: 70, category: 'design', desc: 'Figma, Wireframing, Prototyping, User Research' },
    { name: 'Desain Grafis', level: 85, category: 'design', desc: 'Adobe Illustrator, Photoshop, Vector Art, Layouting' },
    { name: 'Web Programming', level: 55, category: 'dev', desc: 'HTML5, CSS3, JavaScript (ES6+), React, Vite' },
    { name: 'Responsive Layouts', level: 80, category: 'dev', desc: 'CSS Flexbox/Grid, Media Queries, Mobile-First Design' },
    { name: 'Branding & Identity', level: 75, category: 'design', desc: 'Mascot Design, Logo Guidelines, Visual Consistency' }
  ];

  const toolsData = [
    { name: 'Figma', desc: 'Desain Interface & Prototyping', icon: <FaFigma style={{ color: '#F24E1E' }} /> },
    { name: 'Adobe Illustrator', desc: 'Vector Art & Logo Design', icon: <FaPalette style={{ color: '#FF9A00' }} /> },
    { name: 'Adobe Photoshop', desc: 'Digital Painting & Photo Editing', icon: <FaPalette style={{ color: '#31A8FF' }} /> },
    { name: 'VS Code', desc: 'Writing Clean Code', icon: <FaCode style={{ color: '#007ACC' }} /> },
    { name: 'Git & GitHub', desc: 'Version Control', icon: <FaTools style={{ color: '#F05032' }} /> },
    { name: 'Aseprite', desc: 'Pixel Art Creation', icon: <FaTools style={{ color: '#888' }} /> }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);



  return (
    <div className="skills-section fade-in" style={{ width: '100%' }}>
      <h3 className="section-title">SKILLS TREE</h3>

      {/* Category Tabs */}
      <div className="portfolio-filters" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              playMenuSelectSound();
              setActiveCategory(cat.id);
            }}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', width: '100%' }}>
        {/* Progress Bars Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '16px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: 'var(--bg-secondary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
                    {skill.name.toUpperCase()}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="section-title" style={{ marginTop: '16px' }}>EQUIPMENT INVENTORY</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {toolsData.map((tool, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center' }}>
                  {tool.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', margin: 0, fontWeight: 'normal', color: 'var(--text-primary)' }}>{tool.name.toUpperCase()}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '4px 0 0 0', lineHeight: 1.4 }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
