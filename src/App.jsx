import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import GooeyNav from './components/GooeyNav';
import Particles from './components/Particles';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' }
  ];

  const activeIndex = activeTab === 'home' ? 0 : activeTab === 'about' ? 1 : 2;

  const handleTabChange = (index) => {
    if (index === 0) setActiveTab('home');
    else if (index === 1) setActiveTab('about');
    else if (index === 2) setActiveTab('portfolio');
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      
      {/* Sharp grid background with vignette overlay & interactive particles */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <Particles 
          particleCount={90} 
          particleColor="rgba(6, 182, 212, 0.4)" 
          lineColor="rgba(6, 182, 212, 0.12)" 
          maxDistance={110} 
          speed={0.4} 
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
