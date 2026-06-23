import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogleDrive, FaUser } from 'react-icons/fa';

function Home({ setActiveTab }) {
  return (
    <div className="home-container fade-in">
      <div className="profile-card glass-panel">
        
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
        <p className="profile-title">Teknik Informatika S1</p>

        {/* Social Media Links with Custom Interactions */}
        <div className="social-links">
          <a 
            href="https://www.facebook.com/profile.php?id=100084340706660" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn facebook"
            aria-label="Facebook"
          >
            <FaFacebookF />
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
        <div className="action-buttons">
          <button 
            onClick={() => setActiveTab('about')} 
            className="action-btn primary"
          >
            <FaUser /> About Me
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;
