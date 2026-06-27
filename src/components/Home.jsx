import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaUser, FaBriefcase, FaDiscord, FaGithub } from 'react-icons/fa';

function Home({ setActiveTab }) {
  // Typing Animation Effect
  const roles = ['Teknik Informatika S1', 'UI/UX Design Enthusiast', 'Graphic Designer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setRoleText(fullText.substring(0, roleText.length + 1));
        setTypeSpeed(70);

        if (roleText === fullText) {
          setIsDeleting(true);
          setTypeSpeed(1500); // delay before starting deletion
        }
      } else {
        setRoleText(fullText.substring(0, roleText.length - 1));
        setTypeSpeed(35);

        if (roleText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypeSpeed(200); // delay before typing next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, typeSpeed]);

  // Interactive Card 3D Tilt Effect
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 6; // simplified tilt max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: 'transform 0.05s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  return (
    <div className="home-container fade-in">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className="profile-card glass-panel"
      >
        {/* Glow effect that tracks mouse or sparkles */}
        <div className="card-ambient-glow"></div>
        
        {/* Profile Avatar with Glowing Animated Border */}
        <div className="avatar-wrapper">
          <img 
            src="/assets/image.jpeg" 
            alt="hilfum" 
            className="avatar-img"
          />
        </div>

        {/* Name and Professional Title */}
        <h1 className="profile-name">hilfum</h1>
        
        {/* Animated Role Title with custom blinking cursor */}
        <p className="profile-title typing-container">
          <span className="typing-text">{roleText}</span>
          <span className="typing-cursor">|</span>
        </p>

        {/* Social Media Links with Custom Interactions */}
        <div className="social-links">
          <a 
            href="https://github.com/hilfum" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn discord"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a 
            href="https://www.instagram.com/abdlhnnif/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.youtube.com/channel/UC--l-ts1WC-pXwLVkSGv1wA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn youtube"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Action Buttons to navigate sections */}
        <div className="action-buttons" style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center' }}>
          <button 
            onClick={() => setActiveTab('about')} 
            className="action-btn primary"
            style={{ flex: 1, padding: '12px 20px' }}
          >
            <FaUser /> About Me
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')} 
            className="action-btn secondary"
            style={{ flex: 1, padding: '12px 20px' }}
          >
            <FaBriefcase /> Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;
