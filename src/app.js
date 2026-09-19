/**
 * app.js
 * Main application entry point.
 * Imports and initialises all modules in the correct order.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Three.js scene
import './main.js';

// UI & interaction modules
import { initInteractions } from './interactions.js';
import { initScrollAnimations } from './scrollAnimations.js';
import { initScrollTriggers } from './scrollTriggers.js';
import { initSoundManager, triggerTransitionSound } from './soundManager.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Boot sequence — runs after the DOM is ready
initInteractions();
initScrollAnimations();
initSoundManager();
initScrollTriggers(triggerTransitionSound);

// Fast smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, { duration: 0.6, scrollTo: target, ease: 'power2.inOut' });
    }
  });
});
