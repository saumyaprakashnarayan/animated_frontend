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
          if (child.isMesh) {
            // Ensure proper material handling
            if (child.material) {
              child.material.envMapIntensity = 1.5;
              // Add a slight emissive glow and color tint
              child.material.emissiveIntensity = 0.6;
              child.material.color = new THREE.Color(0x38bdf8); // Light blue tint
              child.material.emissive = new THREE.Color(0x0369a1); // Deep blue emissive
              child.material.needsUpdate = true;
            }
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
    // Reduced speed by 1/10th as requested
    const scrollRotation = scrollY * 0.00015;
    
    // Base rotation facing left + scroll rotation + subtle time-based horizontal wobble
    this.group.rotation.y = -Math.PI / 3 + scrollRotation + Math.sin(time * 0.5) * 0.05; 
    
    // Prevent vertical rotation by keeping rotation.x at 0
    this.group.rotation.x = 0;
    
    // Subtle vertical float animation (position, not rotation)
    this.group.position.y = Math.sin(time * 1.5) * 3;
  }
}
