import * as THREE from 'three';

export class Lighting {
  constructor(scene) {
    this.scene = scene;
    
    // Core Ambient Light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(this.ambientLight);

    // Hemisphere Light (adds nice gradient coloring from top to bottom)
    this.hemiLight = new THREE.HemisphereLight(0x0a0a0f, 0x000000, 1.0);
    this.scene.add(this.hemiLight);

    // Key Light
    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.keyLight.position.set(50, 100, 50);
    this.scene.add(this.keyLight);

    // Rim Light 1 (Blue)
    this.rimLight1 = new THREE.DirectionalLight(0x38BDF8, 2.0);
    this.rimLight1.position.set(-100, -50, -100);
    this.scene.add(this.rimLight1);

    // Rim Light 2 (Green)
    this.rimLight2 = new THREE.DirectionalLight(0xC8FF00, 1.5);
    this.rimLight2.position.set(100, -50, -50);
    this.scene.add(this.rimLight2);
    
    // Point Light (at center for internal glow effect on transparent objects)
    this.centerLight = new THREE.PointLight(0x38BDF8, 2.0, 300);
    this.centerLight.position.set(0, 0, 0);
    this.scene.add(this.centerLight);

    // Color palettes to transition through (Blue -> Green -> White variations)
    this.palettes = [
      { rim1: 0x38BDF8, rim2: 0xC8FF00, center: 0x38BDF8 }, // Enterprise + Green
      { rim1: 0xC8FF00, rim2: 0x6EB8FF, center: 0xffffff }, // Green/Cyan/White
      { rim1: 0x38BDF8, rim2: 0x38BDF8, center: 0xC8FF00 }, // Deep Blue + Green Center
    ];
    
    this.currentPalette = 0;
  }

  // Called to slowly transition lighting colors during phases
  update(time) {
    // Subtle movement of rim lights
    this.rimLight1.position.x = -100 + Math.sin(time * 0.5) * 20;
    this.rimLight2.position.x = 100 + Math.cos(time * 0.3) * 20;
    
    // Pulse center light
    this.centerLight.intensity = 2.0 + Math.sin(time * 2.0) * 0.5;
  }
}
