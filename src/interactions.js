/**
 * interactions.js
 * Handles all DOM-level UI interactions:
 *   - Tab system
 *   - FAQ accordion
 *   - Contact form submit
 *   - Custom GSAP cursor + magnetic effect
 *   - 3D card tilt
 *   - AI text decoding effect
 *   - Neural data flow (process section pulse)
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ---- TAB SYSTEM ----
export function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.tab;
      const parent = btn.closest('section') || btn.closest('.section') || btn.parentElement.parentElement;
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(id);
      if (panel) {
        panel.classList.add('active');
        gsap.fromTo(
          panel.querySelectorAll('.reveal'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
        );
      }
    });
  });
}

// ---- FAQ ACCORDION ----
export function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ---- CONTACT FORM ----
export function initContactForm() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = 'Message sent ✓';
    btn.style.background = 'rgba(56,189,248,.15)';
    btn.style.borderColor = 'var(--accent)';
    btn.style.color = 'var(--accent)';
    setTimeout(() => {
      btn.textContent = 'Send message →';
      btn.style.background = 'var(--accent)';
      btn.style.borderColor = 'var(--accent)';
      btn.style.color = 'var(--ink)';
    }, 3000);
  });
}

// ---- CUSTOM GSAP CURSOR ----
export function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    gsap.to(ring,   { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
  });

  // Hover + magnetic effects
  document.querySelectorAll('a, button, .case-card, .tech-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      gsap.to(ring, { scale: 1.5, opacity: 0.8, duration: 0.2, borderColor: 'rgba(56,189,248,0.8)' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, opacity: 0.5, duration: 0.2, borderColor: 'var(--accent)' });
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    });

    if (el.classList.contains('tech-pill') || el.classList.contains('nav-cta') || el.classList.contains('btn-primary')) {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
      });
    }
  });
}

// ---- 3D CARD TILT ----
export function initCardTilt() {
  document.querySelectorAll('.case-card, .pricing-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -10;
      const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 10;
      gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, duration: 0.4, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    });
  });
}

// ---- AI TEXT DECODING EFFECT ----
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>-_\\/[]{}—=+*^?#_';

function decodeNode(node) {
  if (node.nodeType === 3) {
    const original = node.nodeValue;
    if (!original.trim()) return;
    if (!node.originalText) node.originalText = original;
    const target = node.originalText;
    let iter = 0;
    const interval = setInterval(() => {
      node.nodeValue = target.split('').map((char, i) => {
        if (char === ' ' || char === '\n') return char;
        if (i < iter) return target[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      if (iter >= target.length) { node.nodeValue = target; clearInterval(interval); }
      iter += 0.5;
    }, 30);
  } else if (node.nodeType === 1) {
    Array.from(node.childNodes).forEach(decodeNode);
  }
}

export function initTextDecode() {
  document.querySelectorAll('.section-title, .hero-headline').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => decodeNode(el)
    });
  });
}

// ---- NEURAL DATA FLOW (Process pulse) ----
export function initNeuralPulse() {
  document.querySelectorAll('.process-grid').forEach(grid => {
    grid.style.position = 'relative';
    const lineBg = document.createElement('div');
    Object.assign(lineBg.style, {
      position: 'absolute', top: 'calc(3rem + 5px)', left: '2rem', right: '2rem',
      height: '1px', background: 'rgba(255,255,255,0.1)', zIndex: '0'
    });
    const pulse = document.createElement('div');
    Object.assign(pulse.style, {
      position: 'absolute', top: '-1px', left: '0', width: '100px', height: '3px',
      background: 'var(--accent)', boxShadow: '0 0 15px 3px var(--accent)', borderRadius: '2px'
    });
    lineBg.appendChild(pulse);
    grid.appendChild(lineBg);
    gsap.to(pulse, { left: 'calc(100% - 100px)', duration: 3, ease: 'power1.inOut', yoyo: true, repeat: -1 });
  });
}

// ---- SERVICES CSS 3D CYLINDER ----
export function initServicesCylinder() {
  const container = document.querySelector('.services-scroll-container');
  const grid = document.querySelector('.services-grid');
  if (!container || !grid) return;

  const cards = grid.querySelectorAll('.service-card');
  const numCards = cards.length;
  if (numCards === 0) return;

  const angleStep = 360 / numCards;
  const cardWidth = 700; // Match new CSS width for screen-fitting radius
  const radius = (cardWidth / 2) / Math.tan(Math.PI / numCards) - 2; // Increase radius mathematically and subtract 2px to ensure overlap and cover spaces

  // Position cards in a circle
  cards.forEach((card, i) => {
    const angle = i * angleStep;
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });

  let currentAngle = 0;
  let targetAngle = 0;

  // Handle Wheel
  container.addEventListener('wheel', (e) => {
    // If the user is scrolling mostly up/down, let the browser scroll the page normally
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return; 
    }
    // If they are scrolling mostly left/right, rotate the cylinder
    e.preventDefault();
    targetAngle -= e.deltaX * 0.1; // adjust sensitivity
  }, { passive: false });

  // Handle Drag
  let isDragging = false;
  let startX = 0;
  let startAngle = 0;

  const onPointerDown = (e) => {
    isDragging = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    startAngle = targetAngle;
    container.style.cursor = 'grabbing';
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const dx = x - startX;
    targetAngle = startAngle + (dx * 0.25); // adjust sensitivity
  };

  const onPointerUp = () => {
    isDragging = false;
    container.style.cursor = 'grab';
  };

  container.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Animation loop for smooth rotation
  function update() {
    currentAngle += (targetAngle - currentAngle) * 0.05; // easing
    grid.style.transform = `translateZ(-${radius}px) rotateY(${currentAngle}deg)`;
    requestAnimationFrame(update);
  }
  update();
}

// ---- INIT ALL ----
export function initInteractions() {
  initTabs();
  initFAQ();
  initContactForm();
  initCursor();
  initCardTilt();
  initTextDecode();
  initNeuralPulse();
  initServicesCylinder();
}
