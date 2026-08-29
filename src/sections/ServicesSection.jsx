import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/content';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: (index % 3) * 0.1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-header">
        <div style={{color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem'}}>What we do</div>
        <h2 className="section-title">AI infrastructure &<br/><span className="text-accent">HPC Nvidia Enterprise Stack</span></h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((service, idx) => (
          <div 
            key={service.id} 
            className="service-card glass-panel"
            ref={el => cardsRef.current[idx] = el}
          >
            <div className="service-number">{(idx + 1).toString().padStart(2, '0')}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            <div className="service-metrics">
              {service.metrics.map((metric, mIdx) => (
                <span key={mIdx} className="metric-badge">{metric}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
