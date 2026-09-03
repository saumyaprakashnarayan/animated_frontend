import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ANNModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new GLTFLoader();
    loader.load(
      './artificial_neural_network_ann.glb',
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
        
        // Optimize materials
        this.model.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
                // Ensure wireframes or dark mode aesthetic if desired
                // For now we just tweak roughness to make it look premium
                child.material.roughness = 0.2;
                child.material.metalness = 0.8;
                if (child.material.emissive) {
                    child.userData.isEmissive = true;
                }
            }
          }
        });

        this.group.add(this.model);
        this.loaded = true;
        console.log("ANN model loaded. Scale factor:", scaleFactor);
      },
      undefined,
      (error) => {
        console.error('Error loading the ANN model:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle float and rotation
    this.group.rotation.y = time * 0.15 + Math.sin(time * 0.3) * 0.1;
    this.group.rotation.z = Math.sin(time * 0.5) * 0.05;
    this.group.position.y = Math.sin(time * 1.2) * 3;
    
    // Pulsing effect
    const cycleDuration = 4.0;
    const cycleTime = time % cycleDuration;
    let pulseProgress = 0;
    if (cycleTime < 2.0) {
      pulseProgress = cycleTime / 2.0;
    } else {
      pulseProgress = 1.0 - ((cycleTime - 2.0) / 2.0);
    }
    
    const accentColor = window.sceneState.seasonColor || new THREE.Color(0xC8FF00);
    // Reduced glow intensity
    const pulse = 0.05 + pulseProgress * 0.3;

    this.model.traverse((child) => {
      if (child.isMesh && child.material && child.userData.isEmissive) {
        child.material.emissive = accentColor;
        child.material.emissiveIntensity = pulse;
      }
    });
  }
}
