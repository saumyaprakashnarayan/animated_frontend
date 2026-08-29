import * as THREE from 'three';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';

export class JetPlane {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = false;
    this.model = null;

    const loader = new ColladaLoader();
    loader.load(
      './futured-jet-plane/source/model/model.dae',
      (collada) => {
        this.model = collada.scene;
        
        // Auto-scale based on actual bounding box
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        // FOV=60, Z=220 → visible height = 2*220*tan(30°) = 254 units.
        // Robot at Z=250 fills ~half screen ≈ 144 units visible half.
        // Set jet to 100 units to match that footprint.
        const scaleFactor = 3 / maxDim;
        this.model.scale.setScalar(scaleFactor);
        
        // Re-center after scaling — critical to prevent orbital spinning
        const newBox = new THREE.Box3().setFromObject(this.model);
        const center = newBox.getCenter(new THREE.Vector3());
        this.model.position.sub(center);

        // Color palette for a real, futuristic, dark look without neon
        const colorPalette = [
          0x15151c, // Dark slate
          0x1c2029, // Deep blue-grey
          0x252530, // Medium dark grey
          0x0d1520, // Very dark navy
          0x1c1a20, // Dark plum/charcoal
          0x2c303a  // Steel grey for contrast panels
        ];

        // Apply materials to all meshes
        this.model.traverse((child) => {
          if (child.isMesh) {
            // Assign multiple colors based on mesh name/id for variety
            const colorIndex = (child.name.length + child.id) % colorPalette.length;
            
            child.material = new THREE.MeshPhysicalMaterial({
              color: colorPalette[colorIndex],
              metalness: 0.85,
              roughness: 0.25,
              clearcoat: 0.4,
              clearcoatRoughness: 0.2,
              side: THREE.DoubleSide
            });
            
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });

        // Default pose — slight bank to the right
        this.group.rotation.y = Math.PI / 6;
        
        this.group.add(this.model);
        this.loaded = true;
        console.log('Jet plane loaded. Size:', size, 'ScaleFactor:', scaleFactor);
      },
      undefined,
      (error) => {
        console.error('Error loading jet plane:', error);
      }
    );
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle banking and floating — mimics robot face breathing
    this.group.rotation.y = Math.PI / 6 + Math.sin(time * 0.4) * 0.15;
    this.group.rotation.z = Math.sin(time * 0.7) * 0.04;
    this.group.position.y = Math.sin(time * 1.2) * 4;
  }
}
