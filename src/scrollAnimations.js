/**
 * scrollAnimations.js
 * GSAP ScrollTrigger DOM reveal animations:
 *   - Grid children stagger-in on scroll
 *   - Section titles and hero text fade-in
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollAnimations() {
  // Stagger-reveal grid children when they enter the viewport
  const GRIDS = '.services-grid, .process-grid, .industries-list, .cases-grid, .team-grid, .pricing-grid, .faq-list, .testimonial-grid, .contact-grid';
  document.querySelectorAll(GRIDS).forEach(grid => {
    grid.classList.remove('reveal');
    grid.style.opacity = 1;
    gsap.fromTo(
      Array.from(grid.children),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Fade-in section headings and hero copy
  document.querySelectorAll('.section-title, .hero-headline, .hero-sub').forEach(el => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      }
    );
  });
}
