/**
 * scrollTriggers.js
 * Three.js scene transitions driven by GSAP ScrollTrigger.
 * Controls camera movement, bloom, and particle pattern changes
 * as the user scrolls through each section.
 *
 * Pattern Index Map:
 *   0 → Random Dust      (Hero, Contact)
 *   1 → Grid Matrix      (Services, Pricing)
 *   2 → Double Helix     (Process)
 *   3 → Galaxy Spiral    (Industries)
 *   4 → Wave             (Work)
 *   5 → Cylinder         (Team)
 *   6 → Data Streaks     (Technology)
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Maps each section ID to its Three.js pattern and camera state
const SECTION_PATTERNS = [
  { id: '#services',   pattern: 1, model: 'gpu' },
  { id: '#process',    pattern: 2, model: 'jet' },
  { id: '#industries', pattern: 3, model: 'eye' },
  { id: '#work',       pattern: 4, model: 'robot' },
  { id: '#technology', pattern: 6, model: 'ann' }, // Data streaks / Tron grid
  { id: '#team',       pattern: 5, model: 'computer' },
  { id: '#pricing',    pattern: 1, model: 'spacetime' },
  { id: '#contact',    pattern: 0, model: 'robot' }
];

export function initScrollTriggers(triggerTransitionSound) {
  // Camera / bloom driven by scroll position per section
  gsap.timeline({ scrollTrigger: { trigger: '#services', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { scrollSpeedMultiplier: 2.0, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#process', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: 0.35, bloomStrength: 1.8, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#industries', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: -0.15, scrollSpeedMultiplier: -1.0, bloomStrength: 2.2, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#work', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: 0, scrollSpeedMultiplier: 1.0, bloomStrength: 1.0, ease: 'power1.inOut' });

  // Hero pattern (reset to 0 when returning to top)
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top center',
    onEnter:     () => { 
      window.sceneState.particlePattern = 0; 
      window.sceneState.activeSection = '.hero';
      triggerTransitionSound(0); 
      gsap.to(window.sceneState, { robotScale: 1.0, jetScale: 0.0, gpuScale: 0.0, eyeScale: 0.0, annScale: 0.0, spacetimeScale: 0.0, computerScale: 0.0, duration: 1, ease: 'power2.out' });
    },
    onEnterBack: () => { 
      window.sceneState.particlePattern = 0; 
      window.sceneState.activeSection = '.hero';
      triggerTransitionSound(0); 
      gsap.to(window.sceneState, { robotScale: 1.0, jetScale: 0.0, gpuScale: 0.0, eyeScale: 0.0, annScale: 0.0, spacetimeScale: 0.0, computerScale: 0.0, duration: 1, ease: 'power2.out' });
    }
  });

  // Section pattern triggers
  SECTION_PATTERNS.forEach(({ id, pattern, model }, index) => {
    const el = document.querySelector(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      onEnter:     () => { 
        window.sceneState.particlePattern = pattern; 
        window.sceneState.activeSection = id;
        triggerTransitionSound(pattern); 
        gsap.to(window.sceneState, { 
          robotScale: model === 'robot' ? 1.0 : 0.0, 
          jetScale: model === 'jet' ? 1.0 : 0.0, 
          gpuScale: model === 'gpu' ? 1.0 : 0.0, 
          eyeScale: model === 'eye' ? 1.0 : 0.0,
          annScale: model === 'ann' ? 1.0 : 0.0,
          spacetimeScale: model === 'spacetime' ? 1.0 : 0.0,
          computerScale: model === 'computer' ? 1.0 : 0.0,
          duration: 1, ease: 'power2.out' 
        });
      },
      onEnterBack: () => { 
        window.sceneState.particlePattern = pattern; 
        window.sceneState.activeSection = id;
        triggerTransitionSound(pattern); 
        gsap.to(window.sceneState, { 
          robotScale: model === 'robot' ? 1.0 : 0.0, 
          jetScale: model === 'jet' ? 1.0 : 0.0, 
          gpuScale: model === 'gpu' ? 1.0 : 0.0, 
          eyeScale: model === 'eye' ? 1.0 : 0.0,
          annScale: model === 'ann' ? 1.0 : 0.0,
          spacetimeScale: model === 'spacetime' ? 1.0 : 0.0,
          computerScale: model === 'computer' ? 1.0 : 0.0,
          duration: 1, ease: 'power2.out' 
        });
      }
    });
  });

  // PPT Section Transitions
  const pptSections = document.querySelectorAll('.section-slice');
  pptSections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      onEnter: () => section.classList.add('is-visible'),
      onEnterBack: () => section.classList.add('is-visible'),
      onLeave: () => section.classList.remove('is-visible'),
      onLeaveBack: () => section.classList.remove('is-visible')
    });
  });
}
