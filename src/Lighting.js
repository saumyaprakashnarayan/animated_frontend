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

    // Key Light - Reduced base intensity to prevent blowout
    this.keyLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.keyLight.position.set(50, 100, 50);
    this.scene.add(this.keyLight);

    // Rim Light 1 (Emerald)
    this.rimLight1 = new THREE.DirectionalLight(0x00f59b, 0.5);
    this.rimLight1.position.set(-100, -50, -100);
    this.scene.add(this.rimLight1);

    // Rim Light 2 (Cyber Lime)
    this.rimLight2 = new THREE.DirectionalLight(0xc8ff00, 0.2);
    this.rimLight2.position.set(100, -50, -50);
    this.scene.add(this.rimLight2);
    
    // Point Light (at center for internal glow effect on transparent objects)
    this.centerLight = new THREE.PointLight(0x00f59b, 0.5, 300);
    this.centerLight.position.set(0, 0, 0);
    this.scene.add(this.centerLight);

    // Color palettes to transition through (Emerald -> Lime -> White variations)
    this.palettes = [
      { rim1: 0x00f59b, rim2: 0xc8ff00, center: 0x00f59b }, // Emerald + Lime
      { rim1: 0xc8ff00, rim2: 0xffffff, center: 0xffffff }, // Lime/White
      { rim1: 0x00f59b, rim2: 0x00f59b, center: 0xc8ff00 }, // Deep Emerald + Lime Center
    ];
    
    this.currentPalette = 0;
  }

  // Called to slowly transition lighting colors during phases
  update(time) {
    // Subtle movement of rim lights
    this.rimLight1.position.x = -100 + Math.sin(time * 0.5) * 20;
    this.rimLight2.position.x = 100 + Math.cos(time * 0.3) * 20;
    
    // Interactive pulse effect (3s dark to bright, 2s bright to dark)
    const cycleDuration = 5.0;
    const cycleTime = time % cycleDuration;
    let pulse = 0;
    if (cycleTime < 3.0) {
      const p = cycleTime / 3.0;
      pulse = p * p * (3 - 2 * p); // smoothstep ease up
    } else {
      const p = (cycleTime - 3.0) / 2.0;
      pulse = 1.0 - (p * p * (3 - 2 * p)); // smoothstep ease down
    }
    
    // The key light and rim light 2 pulse smoothly, reaching a higher peak brightness
    this.keyLight.intensity = 0.3 + pulse * 1.2; // Pulses between 0.3 and 1.5
    this.rimLight2.intensity = 0.1 + pulse * 1.0; // Pulses between 0.1 and 1.1
    this.centerLight.intensity = 0.2 + pulse * 0.9; // Pulses between 0.2 and 1.1
  }
}
