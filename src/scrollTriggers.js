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
  { id: '#services',   pattern: 1 },
  { id: '#process',    pattern: 2 },
  { id: '#industries', pattern: 3 },
  { id: '#work',       pattern: 4 },
  { id: '#technology', pattern: 6 }, // Data streaks / Tron grid
  { id: '#team',       pattern: 5 },
  { id: '#pricing',    pattern: 1 },
  { id: '#contact',    pattern: 0 }
];

export function initScrollTriggers(triggerTransitionSound) {
  // Camera / bloom driven by scroll position per section
  gsap.timeline({ scrollTrigger: { trigger: '#services', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraZ: 120, scrollSpeedMultiplier: 4.0, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#process', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: 0.35, bloomStrength: 1.8, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#industries', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: -0.15, cameraZ: 350, scrollSpeedMultiplier: -1.0, bloomStrength: 2.2, ease: 'power1.inOut' });

  gsap.timeline({ scrollTrigger: { trigger: '#work', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    .to(window.sceneState, { cameraRotationZ: 0, cameraZ: 200, scrollSpeedMultiplier: 1.0, bloomStrength: 1.0, ease: 'power1.inOut' });

  // Hero pattern (reset to 0 when returning to top)
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top center',
    onEnter:     () => { window.sceneState.particlePattern = 0; triggerTransitionSound(0); },
    onEnterBack: () => { window.sceneState.particlePattern = 0; triggerTransitionSound(0); }
  });

  // Section pattern triggers
  SECTION_PATTERNS.forEach(({ id, pattern }) => {
    const el = document.querySelector(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      onEnter:     () => { window.sceneState.particlePattern = pattern; triggerTransitionSound(pattern); },
      onEnterBack: () => { window.sceneState.particlePattern = pattern; triggerTransitionSound(pattern); }
    });
  });
}
