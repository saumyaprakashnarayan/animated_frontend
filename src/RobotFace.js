import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class RobotFace {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new GLTFLoader();
    loader.load(
      './humanoid_robot_face.glb',
      (gltf) => {
        this.model = gltf.scene;
        
        // Initial scale - adjust depending on the model's native size
        this.model.scale.set(400, 400, 400);
        
        // Center the model in the group
        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        this.model.position.sub(center); // Move model so its center is at group origin
        
        this.model.traverse((child) => {
          if (child.isMesh && child.material) {
            const matName = child.material.name || '';
            const origMat = child.material;
            
            let newMat = new THREE.MeshPhysicalMaterial({
              map: origMat.map,
              normalMap: origMat.normalMap,
              roughnessMap: origMat.roughnessMap,
              metalnessMap: origMat.metalnessMap,
              emissiveMap: origMat.emissiveMap,
              color: origMat.color || new THREE.Color(0x333333)
            });

            if (matName.includes('EyeRefractive') && !matName.includes('IRIS')) {
              // Glass eye cover
              newMat.transparent = true;
              newMat.transmission = 0.95;
              newMat.opacity = 1.0;
              newMat.ior = 1.5;
              newMat.roughness = 0.05;
              newMat.metalness = 0.1;
              newMat.clearcoat = 1.0;
            } else if (matName.includes('IRIS') || matName.includes('cutter') || origMat.emissive?.r > 0 || matName === 'material_0') {
              // Glowing elements
              newMat.color = new THREE.Color(0x111111);
              newMat.emissive = new THREE.Color(0xC8FF00); // Base green
              newMat.emissiveIntensity = 2.0;
              child.userData.isLight = true; // Tag for pulsing
            } else {
              // Dark metallic plating for everything else
              newMat.color = new THREE.Color(0x666666); // Lighter base so directional lights hit it
              newMat.metalness = 0.5; // Lower metalness so it reflects diffuse light (key lights) better
              newMat.roughness = 0.3; // Shiny enough to look like tech
              newMat.clearcoat = 0.5;
            }
            
            child.material = newMat;
          }
        });

        this.group.add(this.model);
        this.loaded = true;
        console.log("Robot face model loaded successfully");
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading the robot face model:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Use scroll position to drive rotation from left to right
    const scrollY = window.scrollY || 0;
    
    // Start facing left (-Math.PI/3) and turn right as user scrolls down
    const scrollRotation = scrollY * 0.00015;
    
    // Base rotation facing left + scroll rotation + subtle time-based horizontal wobble
    this.group.rotation.y = -Math.PI / 3 + scrollRotation + Math.sin(time * 0.5) * 0.05; 
    
    // Prevent vertical rotation by keeping rotation.x at 0
    this.group.rotation.x = 0;
    
    // Subtle vertical float animation (position, not rotation)
    this.group.position.y = Math.sin(time * 1.5) * 3;
    
    // Make the robot glow pulse from dim to bright to dim (3s rise, 2s fall)
    const cycleDuration = 5.0;
    const cycleTime = time % cycleDuration;
    let pulseProgress = 0;
    if (cycleTime < 3.0) {
      const p = cycleTime / 3.0;
      pulseProgress = p * p * (3 - 2 * p); // smoothstep ease up
    } else {
      const p = (cycleTime - 3.0) / 2.0;
      pulseProgress = 1.0 - (p * p * (3 - 2 * p)); // smoothstep ease down
    }
    
    // Use the brand accent color for a subtle breathing effect
    const accentColor = window.sceneState.seasonColor || new THREE.Color(0xC8FF00);
    
    // Ranges from 1.0 to 5.0 for a strong neon glow
    const pulse = 1.0 + pulseProgress * 4.0;
    this.model.traverse((child) => {
      if (child.isMesh && child.material && child.userData.isLight) {
        child.material.emissive = accentColor;
        child.material.emissiveIntensity = pulse;
      }
    });
  }
}
