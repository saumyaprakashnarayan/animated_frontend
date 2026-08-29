import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 2.6 // Wait for preloader
      });
      
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 3.2
      });

      gsap.from('.hero-ctas', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 3.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div style={{color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem'}}>AI Consulting & Implementation</div>
        <h1 className="hero-title" ref={textRef}>
          <span>Build</span> <span>AI</span> <span>that</span> <span>actually</span> <span className="text-accent">works</span>
        </h1>
        <p className="hero-subtitle">
          We partner with forward-thinking businesses to design, develop, and deploy production-ready AI systems that drive measurable impact — from first prototype to full-scale rollout.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary">Start a project →</button>
          <button className="btn-secondary">See our work</button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default HeroSection;
