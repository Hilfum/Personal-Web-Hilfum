import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import SideRays from './components/SideRays';
import GooeyNav from './components/GooeyNav';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' }
  ];

  const activeIndex = activeTab === 'home' ? 0 : 1;

  const handleTabChange = (index) => {
    setActiveTab(index === 0 ? 'home' : 'about');
  };

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
        <SideRays
          speed={1.5}
          rayColor1="#06b6d4"
          rayColor2="#3b82f6"
          intensity={1.5}
          spread={1.5}
          origin="top-right"
          tilt={-10}
          saturation={1.5}
          blend={0.5}
          falloff={1.5}
          opacity={0.6}
        />
      </div>

      {/* Floating Glassmorphic Header Navigation */}
      <header className="main-nav">
        <div className="logo-container" onClick={() => setActiveTab('home')}>
          hilfum
        </div>
        <GooeyNav
          items={navItems}
          activeIndex={activeIndex}
          onChange={handleTabChange}
          particleCount={12}
          particleDistances={[80, 10]}
          particleR={80}
          colors={[1, 2, 3, 1, 2, 3, 4]}
        />
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
