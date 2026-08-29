import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class RoboticEye {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new GLTFLoader();
    loader.load(
      './robotic_eye.glb',
      (gltf) => {
        this.model = gltf.scene;
        
        // Auto-scale based on bounding box
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        
        // Similar to the other models, set footprint
        const scaleFactor = 150 / maxDim;
        this.model.scale.setScalar(scaleFactor);
        
        // Center the model in the group
        const newBox = new THREE.Box3().setFromObject(this.model);
        const center = newBox.getCenter(new THREE.Vector3());
        this.model.position.sub(center); 
        
        this.model.traverse((child) => {
          if (child.isMesh) {
            const matName = child.material.name;
            let newMat = new THREE.MeshPhysicalMaterial();

            if (matName === 'Glass') {
              // Dark smoked glass for outer shell
              newMat.color = new THREE.Color(0x111111);
              newMat.metalness = 0.1;
              newMat.roughness = 0.1;
              newMat.transparent = true;
              newMat.transmission = 0.9; // Glass effect
              newMat.opacity = 1.0;
              newMat.ior = 1.5;
              newMat.thickness = 0.5;
              newMat.clearcoat = 1.0;
              newMat.clearcoatRoughness = 0.1;
            } else if (matName === 'Camera_Lens') {
              newMat.color = new THREE.Color(0x050505);
              newMat.metalness = 1.0;
              newMat.roughness = 0.05;
              newMat.clearcoat = 1.0;
              newMat.clearcoatRoughness = 0.0;
              // A deep sapphire core glow
              newMat.emissive = new THREE.Color(0x0044aa);
              newMat.emissiveIntensity = 1.5;
            } else if (matName === 'Light') {
              // The glowing red dots
              newMat.color = new THREE.Color(0xff1111); // Red base
              newMat.emissive = new THREE.Color(0xff0000);
              newMat.emissiveIntensity = 5.0;
              child.userData.isLight = true;
            } else if (matName === 'Copper') {
              newMat.color = new THREE.Color(0xb87333); // Copper color
              newMat.metalness = 1.0;
              newMat.roughness = 0.2;
              newMat.clearcoat = 0.5;
            } else if (matName === 'White_Plastic' || matName === 'Camera_Plastic' || matName === 'Black_Plastic') {
              // Dark theme to match the image
              newMat.color = new THREE.Color(0x1a1a1a);
              newMat.metalness = 0.5;
              newMat.roughness = 0.5;
              newMat.clearcoat = 0.2;
            } else if (matName.includes('Metal') || matName.includes('BezierCurve')) {
              newMat.color = new THREE.Color(0x333333);
              newMat.metalness = 0.9;
              newMat.roughness = 0.4;
            } else {
              // Default dark metallic fallback
              newMat.color = new THREE.Color(0x1a1a24);
              newMat.metalness = 0.9;
              newMat.roughness = 0.3;
              newMat.clearcoat = 0.5;
            }
            
            child.material = newMat;
          }
        });

        this.group.add(this.model);
        this.loaded = true;
        console.log("Robotic eye loaded. Scale factor:", scaleFactor);
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading the robotic eye model:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle float and rotation
    this.group.rotation.y = Math.PI + time * 0.2 + Math.sin(time * 0.5) * 0.2;
    this.group.rotation.z = Math.sin(time * 0.7) * 0.1;
    this.group.position.y = Math.sin(time * 1.5) * 4;
    
    // Pulsing eye effect
    const cycleDuration = 4.0;
    const cycleTime = time % cycleDuration;
    let pulseProgress = 0;
    if (cycleTime < 2.0) {
      pulseProgress = cycleTime / 2.0;
    } else {
      pulseProgress = 1.0 - ((cycleTime - 2.0) / 2.0);
    }
    
    const pulse = 2.0 + pulseProgress * 8.0; // Stronger pulse for the red lights

    this.model.traverse((child) => {
      if (child.isMesh && child.material && child.userData.isLight) {
        // Add dynamic glowing effect only to the red lights
        child.material.emissiveIntensity = pulse;
      }
    });
  }
}
