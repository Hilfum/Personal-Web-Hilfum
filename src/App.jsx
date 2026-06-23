import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      
      {/* Premium Ambient Background Blobs */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Floating Glassmorphic Header Navigation */}
      <header className="main-nav">
        <div className="logo-container" onClick={() => setActiveTab('home')}>
          hilfum.dev
        </div>
        <nav className="nav-links">
          <button
            onClick={() => setActiveTab('home')}
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
          >
            About Me
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="page-wrapper">
        {renderActivePage()}
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} <span>hilfum</span>. All Rights Reserved. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
