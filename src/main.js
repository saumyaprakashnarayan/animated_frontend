import { App } from './App.js';
import { Lighting } from './Lighting.js';
import { PostProcessing } from './PostProcessing.js';
import { BackgroundParticles } from './BackgroundParticles.js';
import { AIEntity } from './AIEntity.js';

const canvas = document.getElementById('bg-canvas');
const app = new App(canvas);
const lighting = new Lighting(app.scene);
const postProcessing = new PostProcessing(app.renderer, app.scene, app.camera);
const particles = new BackgroundParticles(app.scene);
const aiEntity = new AIEntity(app.scene);

// Expose sceneState globally so GSAP ScrollTriggers in index.html can modify it
window.sceneState = {
  cameraZ: 250,
  cameraRotationZ: 0,
  bloomStrength: 1.2,
  scrollSpeedMultiplier: 1.0,
  mouseParallaxX: 0,
  mouseParallaxY: 0,
  particlePattern: 0
};

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  
  // Smoothly interpolate target parallax
  window.sceneState.mouseParallaxX = (mouse.x - window.innerWidth / 2) * 0.05;
  window.sceneState.mouseParallaxY = (mouse.y - window.innerHeight / 2) * 0.05;
});

// Replace the resize method to also handle PostProcessing
const originalResize = app.onResize;
app.onResize = () => {
  originalResize();
  postProcessing.resize(window.innerWidth, window.innerHeight, app.renderer.getPixelRatio());
};

function tick() {
  requestAnimationFrame(tick);
  const time = app.clock.getElapsedTime();

  // Update modules
  lighting.update(time);
  particles.update(time, window.sceneState.scrollSpeedMultiplier, window.sceneState.particlePattern);
  aiEntity.update(time, window.sceneState.scrollSpeedMultiplier);

  // Apply state from GSAP/DOM interactions
  const scrollOffset = window.scrollY * 0.1;
  
  app.camera.position.x += (window.sceneState.mouseParallaxX - app.camera.position.x) * 0.05;
  app.camera.position.y += (-window.sceneState.mouseParallaxY - scrollOffset - app.camera.position.y) * 0.05;
  app.camera.position.z += (window.sceneState.cameraZ - app.camera.position.z) * 0.05;
  
  app.camera.lookAt(0, -scrollOffset * 0.5, 0);
  app.camera.rotation.z += (window.sceneState.cameraRotationZ - app.camera.rotation.z) * 0.05;

  postProcessing.bloomPass.strength = window.sceneState.bloomStrength;

  // Render via PostProcessing instead of standard renderer
  postProcessing.render();
}

tick();
