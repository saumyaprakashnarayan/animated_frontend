import * as THREE from 'three';
import { App } from './App.js';
import { Lighting } from './Lighting.js';
import { PostProcessing } from './PostProcessing.js';
import { BackgroundParticles } from './BackgroundParticles.js';
import { RobotFace } from './RobotFace.js';
import { JetPlane } from './JetPlane.js';
import { GPUModel } from './GPUModel.js';
import { RoboticEye } from './RoboticEye.js';
import { ANNModel } from './ANNModel.js';
import { SpacetimeModel } from './SpacetimeModel.js';
import { SuperComputerModel } from './SuperComputerModel.js';

const canvas = document.getElementById('bg-canvas');
const app = new App(canvas);
const lighting = new Lighting(app.scene);
const postProcessing = new PostProcessing(app.renderer, app.scene, app.camera);
const particles = new BackgroundParticles(app.scene);
const robotFace = new RobotFace(app.scene);
const jetPlane = new JetPlane(app.scene);
const gpuModel = new GPUModel(app.scene);
const roboticEye = new RoboticEye(app.scene);
const annModel = new ANNModel(app.scene);
const spacetimeModel = new SpacetimeModel(app.scene);
const computerModel = new SuperComputerModel(app.scene);

// Move the patterns and models a little to the right of the screen
particles.points.position.x = 100;
particles.innerPoints.position.x = 100;
particles.gridLines.position.x = 100;
robotFace.group.position.x = 100;
jetPlane.group.position.x = 0; // At center — camera zooms to Z=120 in Services so must be centered
gpuModel.group.position.x = 100; // Typical right-side placement
roboticEye.group.position.x = 100;
annModel.group.position.x = 100;
spacetimeModel.group.position.x = 100;
computerModel.group.position.x = 100;

const SEASONS = [
  new THREE.Color(0xa8ff78), // Spring Green
  new THREE.Color(0xffd194), // Summer Yellow/Orange
  new THREE.Color(0xff7b00), // Autumn Orange/Red
  new THREE.Color(0x38BDF8)  // Winter Blue
];

// Expose sceneState globally so GSAP ScrollTriggers in index.html can modify it
window.sceneState = {
  cameraZ: 250,
  cameraRotationZ: 0,
  bloomStrength: 1.2,
  scrollSpeedMultiplier: 1.0,
  mouseParallaxX: 0,
  mouseParallaxY: 0,
  particlePattern: 0,
  robotScale: 1.0,
  jetScale: 0.0,
  gpuScale: 0.0,
  eyeScale: 0.0,
  annScale: 0.0,
  spacetimeScale: 0.0,
  computerScale: 0.0,
  seasonIndex: 0,
  seasonColor: SEASONS[0].clone()
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

  // Update seasonal color
  const defaultAccent = new THREE.Color(0xC8FF00); // Original neon green for DOM
  const defaultParticleTint = new THREE.Color(0xffffff); // Original white tint for particles
  let targetDomColor, targetParticleTint;
  let applySeasonalPhysics = false;

  if (window.sceneState.activeSection === '#services') {
    targetDomColor = SEASONS[window.sceneState.seasonIndex || 0];
    targetParticleTint = targetDomColor;
    applySeasonalPhysics = true;
  } else {
    targetDomColor = defaultAccent;
    targetParticleTint = defaultParticleTint;
  }

  if (!window.sceneState.particleTintColor) {
    window.sceneState.particleTintColor = new THREE.Color(0xffffff);
  }

  window.sceneState.seasonColor.lerp(targetDomColor, 0.05);
  window.sceneState.particleTintColor.lerp(targetParticleTint, 0.05);

  // Apply to DOM CSS variable
  const r = Math.round(window.sceneState.seasonColor.r * 255);
  const g = Math.round(window.sceneState.seasonColor.g * 255);
  const b = Math.round(window.sceneState.seasonColor.b * 255);
  document.documentElement.style.setProperty('--accent', `rgb(${r}, ${g}, ${b})`);

  const activeSeasonIndex = applySeasonalPhysics ? window.sceneState.seasonIndex : null;
  particles.update(time, window.sceneState.scrollSpeedMultiplier, window.sceneState.particlePattern, activeSeasonIndex, window.sceneState.particleTintColor);
  robotFace.update(time, window.sceneState.scrollSpeedMultiplier);
  jetPlane.update(time, window.sceneState.scrollSpeedMultiplier);
  gpuModel.update(time, window.sceneState.scrollSpeedMultiplier);
  roboticEye.update(time, window.sceneState.scrollSpeedMultiplier);
  annModel.update(time, window.sceneState.scrollSpeedMultiplier);
  spacetimeModel.update(time, window.sceneState.scrollSpeedMultiplier);
  computerModel.update(time, window.sceneState.scrollSpeedMultiplier);

  // Apply scales
  robotFace.group.scale.lerp(new THREE.Vector3(window.sceneState.robotScale, window.sceneState.robotScale, window.sceneState.robotScale), 0.1);
  jetPlane.group.scale.lerp(new THREE.Vector3(window.sceneState.jetScale, window.sceneState.jetScale, window.sceneState.jetScale), 0.1);
  gpuModel.group.scale.lerp(new THREE.Vector3(window.sceneState.gpuScale, window.sceneState.gpuScale, window.sceneState.gpuScale), 0.1);
  roboticEye.group.scale.lerp(new THREE.Vector3(window.sceneState.eyeScale, window.sceneState.eyeScale, window.sceneState.eyeScale), 0.1);
  annModel.group.scale.lerp(new THREE.Vector3(window.sceneState.annScale, window.sceneState.annScale, window.sceneState.annScale), 0.1);
  spacetimeModel.group.scale.lerp(new THREE.Vector3(window.sceneState.spacetimeScale, window.sceneState.spacetimeScale, window.sceneState.spacetimeScale), 0.1);
  computerModel.group.scale.lerp(new THREE.Vector3(window.sceneState.computerScale, window.sceneState.computerScale, window.sceneState.computerScale), 0.1);

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
