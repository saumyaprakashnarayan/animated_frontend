import React from 'react';
import './Footer.css';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">TRAYAKSH.AI</div>
          <p className="footer-desc">Enterprise AI Infrastructure & HPC Solutions built for scale.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Github"><Github size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Solutions</h4>
            <a href="#">GPU Clusters</a>
            <a href="#">HPC Networking</a>
            <a href="#">MLOps Pipelines</a>
            <a href="#">Data Storage</a>
          </div>
          
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Case Studies</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Trayaksh.ai. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
