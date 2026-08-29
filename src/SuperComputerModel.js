import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class SuperComputerModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new GLTFLoader();
    loader.load(
      './a_super_computer.glb',
      (gltf) => {
        this.model = gltf.scene;
        
        // Auto-scale based on bounding box
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        
        const scaleFactor = (150 / maxDim) * 8; // Manually scaled up to fix bounding box issues
        this.model.scale.setScalar(scaleFactor);
        
        // Center the model in the group
        const newBox = new THREE.Box3().setFromObject(this.model);
        const center = newBox.getCenter(new THREE.Vector3());
        this.model.position.sub(center); 
        
        this.group.add(this.model);
        this.loaded = true;
        console.log("Super Computer model loaded. Scale factor:", scaleFactor);
      },
      undefined,
      (error) => {
        console.error('Error loading the Super Computer model:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle float and rotation
    this.group.rotation.y = time * 0.15;
    this.group.rotation.x = Math.sin(time * 0.5) * 0.05;
    this.group.position.y = Math.sin(time * 1.0) * 3;
    
    const cycleDuration = 3.0;
    const cycleTime = time % cycleDuration;
    let pulseProgress = 0;
    if (cycleTime < 1.5) {
      pulseProgress = cycleTime / 1.5;
    } else {
      pulseProgress = 1.0 - ((cycleTime - 1.5) / 1.5);
    }
    
    const accentColor = window.sceneState.seasonColor || new THREE.Color(0xC8FF00);
    const pulse = 0.05 + pulseProgress * 0.3;

    // Small pulsing emissive effect on certain parts if needed
    // Assuming the PBR model handles most of its own looks, we just lightly tint it
    this.model.traverse((child) => {
      if (child.isMesh && child.material && child.material.name.toLowerCase().includes('light')) {
        child.material.emissive = accentColor;
        child.material.emissiveIntensity = pulse * 5;
      }
    });
  }
}
