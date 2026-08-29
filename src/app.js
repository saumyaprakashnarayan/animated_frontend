/**
 * app.js
 * Main application entry point.
 * Imports and initialises all modules in the correct order.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Three.js scene
import './main.js';

// UI & interaction modules
import { initInteractions } from './interactions.js';
import { initScrollAnimations } from './scrollAnimations.js';
import { initScrollTriggers } from './scrollTriggers.js';
import { initSoundManager, triggerTransitionSound } from './soundManager.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Boot sequence — runs after the DOM is ready
initInteractions();
initScrollAnimations();
initSoundManager();
initScrollTriggers(triggerTransitionSound);
