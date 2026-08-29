import React from 'react';
import { PARTNERS } from '../data/content';

const PartnersSection = () => {
  return (
    <section id="partners" style={{ padding: '4rem 5%', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.5 }}>
        {PARTNERS.map((partner, idx) => (
          <h3 key={idx} style={{ letterSpacing: '0.2em' }}>{partner}</h3>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
