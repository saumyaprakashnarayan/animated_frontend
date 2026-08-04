import * as THREE from 'three';

export class AbstractShape {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    // Main material
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x0f172a, // dark slate
      emissive: 0x38bdf8,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    // Inner glowing core material
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const geometries = [
      new THREE.IcosahedronGeometry(100, 1),           // 0: Services
      new THREE.OctahedronGeometry(100, 2),            // 1: Process
      new THREE.DodecahedronGeometry(100, 0),          // 2: Industries
      new THREE.SphereGeometry(100, 24, 24),           // 3: Work
      new THREE.CylinderGeometry(60, 60, 150, 16),     // 4: Technology
      new THREE.TorusGeometry(80, 30, 16, 100),        // 5: Team
      new THREE.TetrahedronGeometry(100, 1),           // 6: Pricing
      new THREE.BoxGeometry(100, 100, 100)             // 7: Contact
    ];

    this.shapes = geometries.map((geo) => {
      const mesh = new THREE.Mesh(geo, material);
      const coreGeo = new THREE.IcosahedronGeometry(40, 1);
      const core = new THREE.Mesh(coreGeo, coreMaterial);
      
      const shapeGroup = new THREE.Group();
      shapeGroup.add(mesh);
      shapeGroup.add(core);
      
      // hide all individual shapes initially
      shapeGroup.scale.set(0, 0, 0); 
      this.group.add(shapeGroup);
      
      return { group: shapeGroup, mesh: mesh, core: core };
    });

    // Initial scale for the entire group
    this.group.scale.set(0, 0, 0);
  }

  update(time, scrollSpeedMultiplier, targetScale, activeIndex) {
    // Smoothly scale the entire group based on shapeScale
    this.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    
    // Gentle bobbing motion for the whole group
    this.group.position.y = Math.sin(time * 1.5) * 5;

    // Transition individual shapes
    this.shapes.forEach((shapeObj, i) => {
      // Scale up the active shape, scale down others
      const s = (i === activeIndex) ? 1.0 : 0.0;
      shapeObj.group.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
      
      // Only compute rotations if shape is somewhat visible
      if (shapeObj.group.scale.x > 0.01) {
        shapeObj.mesh.rotation.x = time * 0.3 * scrollSpeedMultiplier;
        shapeObj.mesh.rotation.y = time * 0.4 * scrollSpeedMultiplier;
        shapeObj.mesh.rotation.z = Math.sin(time * 0.2) * 0.5;

        shapeObj.core.rotation.x = -time * 0.5;
        shapeObj.core.rotation.y = time * 0.6;
      }
    });
  }
}
