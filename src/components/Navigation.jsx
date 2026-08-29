import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>TRAYAKSH</span>.AI
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#services">Services</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#work">Work</a>
          <a href="#technology">Technology</a>
        </div>

        <div className="nav-actions desktop-only">
          <button className="btn-primary">Book Strategy Call</button>
        </div>

        <button 
          className="mobile-toggle mobile-only" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#infrastructure" onClick={() => setMenuOpen(false)}>Infrastructure</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
        <button className="btn-primary">Book Strategy Call</button>
      </div>
    </nav>
  );
};

export default Navigation;
