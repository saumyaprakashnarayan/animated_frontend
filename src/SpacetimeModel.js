import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class SpacetimeModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new GLTFLoader();
    loader.load(
      './warped_spacetime.glb',
      (gltf) => {
        this.model = gltf.scene;
        
        // Auto-scale based on bounding box
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        
        const scaleFactor = (150 / maxDim) * 12; // Manually scaled up to fix bounding box issues
        this.model.scale.setScalar(scaleFactor);
        
        // Center the model in the group
        const newBox = new THREE.Box3().setFromObject(this.model);
        const center = newBox.getCenter(new THREE.Vector3());
        this.model.position.sub(center); 
        
        // Enhance visual aesthetic
        this.model.traverse((child) => {
          if (child.isMesh) {
            // Apply wireframe or solid tech look
            child.material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color(0x1a1a24), // Dark metallic
              metalness: 0.9,
              roughness: 0.3,
              clearcoat: 0.5,
              clearcoatRoughness: 0.2,
              wireframe: child.material.wireframe || false // Preserve wireframe if baked in
            });
          }
        });

        this.group.add(this.model);
        this.loaded = true;
        console.log("Spacetime model loaded. Scale factor:", scaleFactor);
      },
      undefined,
      (error) => {
        console.error('Error loading the Spacetime model:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle float and rotation
    this.group.rotation.y = time * 0.2 + Math.sin(time * 0.5) * 0.2;
    this.group.rotation.x = time * 0.1;
    this.group.position.y = Math.sin(time * 1.5) * 4;
    
    // Pulsing glow
    const cycleDuration = 5.0;
    const cycleTime = time % cycleDuration;
    let pulseProgress = 0;
    if (cycleTime < 2.5) {
      pulseProgress = cycleTime / 2.5;
    } else {
      pulseProgress = 1.0 - ((cycleTime - 2.5) / 2.5);
    }
    
    const accentColor = window.sceneState.seasonColor || new THREE.Color(0xC8FF00);
    const pulse = 0.1 + pulseProgress * 0.5;

    this.model.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.emissive = accentColor;
        child.material.emissiveIntensity = pulse;
      }
    });
  }
}
