import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '8rem 5%' }}>
      <div className="glass-panel" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title">Ready to Scale?</h2>
        <p className="section-subtitle">Book a discovery call to discuss your AI infrastructure needs.</p>
        <button className="btn-primary" style={{ marginTop: '2rem' }}>Book Discovery Call</button>
      </div>
    </section>
  );
};

export default ContactSection;
