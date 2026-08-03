import * as THREE from 'three';
import { gsap } from 'gsap';
import { MaterialFactory } from './Materials.js';

export class AIEntity {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.materials = MaterialFactory.createMaterials();
    this.meshes = [];

    this.createGeometries();
    this.setupTimeline();
    
    // Add some noise to the group rotation
    this.baseRotationSpeedX = 0.2;
    this.baseRotationSpeedY = 0.3;
  }

  createGeometries() {
    // Phase 1: Particle Neural Sphere (represented by a wireframe base + inner particle core handling the visual)
    const g1 = new THREE.SphereGeometry(20, 16, 16);
    const m1 = new THREE.Mesh(g1, this.materials[0]);
    this.meshes.push(m1);

    // Phase 2: Glass Icosahedron
    const g2 = new THREE.IcosahedronGeometry(22, 0);
    const m2 = new THREE.Mesh(g2, this.materials[1]);
    this.meshes.push(m2);

    // Phase 3: Energy Torus Knot
    const g3 = new THREE.TorusKnotGeometry(15, 4, 100, 16);
    const m3 = new THREE.Mesh(g3, this.materials[2]);
    this.meshes.push(m3);

    // Phase 4: Wireframe Cube
    const g4 = new THREE.BoxGeometry(28, 28, 28, 4, 4, 4);
    const m4 = new THREE.Mesh(g4, this.materials[3]);
    this.meshes.push(m4);

    // Phase 5: Floating Rings
    const g5 = new THREE.TorusGeometry(25, 2, 16, 100);
    const m5 = new THREE.Mesh(g5, this.materials[4]);
    this.meshes.push(m5);

    // Phase 6: Metallic Dodecahedron
    const g6 = new THREE.DodecahedronGeometry(22, 0);
    const m6 = new THREE.Mesh(g6, this.materials[5]);
    this.meshes.push(m6);

    // Phase 7: Crystal Octahedron
    const g7 = new THREE.OctahedronGeometry(25, 0);
    const m7 = new THREE.Mesh(g7, this.materials[6]);
    this.meshes.push(m7);

    // Phase 8: Energy Capsule
    const g8 = new THREE.CapsuleGeometry(12, 15, 4, 16);
    const m8 = new THREE.Mesh(g8, this.materials[7]);
    this.meshes.push(m8);

    // Phase 9: Holographic Cylinder
    const g9 = new THREE.CylinderGeometry(15, 15, 40, 32, 10, true);
    const m9 = new THREE.Mesh(g9, this.materials[8]);
    this.meshes.push(m9);

    // Phase 10: Ultimate Core (Sphere with high subdivision)
    const g10 = new THREE.SphereGeometry(24, 64, 64);
    const m10 = new THREE.Mesh(g10, this.materials[9]);
    this.meshes.push(m10);

    // Add all to group, hide them all initially except the first
    this.meshes.forEach((mesh, index) => {
      // Create a wrapper group for each to allow independent spinning
      const wrapper = new THREE.Group();
      wrapper.add(mesh);
      this.group.add(wrapper);
      
      mesh.scale.set(0.01, 0.01, 0.01);
      if (mesh.material.opacity !== undefined) {
        mesh.material.opacity = 0;
      }
    });
    
    // Init first mesh
    this.meshes[0].scale.set(1, 1, 1);
    this.meshes[0].material.opacity = 1;
  }

  setupTimeline() {
    // 60 second loop. 10 phases. 6s per phase (4s solid, 2s transition).
    this.masterTl = gsap.timeline({ repeat: -1 });

    const phaseDuration = 6;
    const transitionDuration = 2;
    const holdDuration = phaseDuration - transitionDuration; // 4s

    for (let i = 0; i < 10; i++) {
      const currentMesh = this.meshes[i];
      const nextMesh = this.meshes[(i + 1) % 10];

      const tl = gsap.timeline();
      
      // Hold phase
      tl.to({}, { duration: holdDuration });

      // Transition phase: 
      // 1. Swell and fade out current
      tl.to(currentMesh.scale, { x: 1.5, y: 1.5, z: 1.5, duration: transitionDuration, ease: "power2.in" }, holdDuration);
      if (currentMesh.material.opacity !== undefined) {
        tl.to(currentMesh.material, { opacity: 0, duration: transitionDuration, ease: "power2.inOut" }, holdDuration);
      }

      // 2. Shrink and fade in next
      nextMesh.scale.set(0.2, 0.2, 0.2); // reset scale before entering
      tl.to(nextMesh.scale, { x: 1, y: 1, z: 1, duration: transitionDuration, ease: "back.out(1.5)" }, holdDuration);
      if (nextMesh.material.opacity !== undefined) {
        tl.to(nextMesh.material, { opacity: 1, duration: transitionDuration, ease: "power2.inOut" }, holdDuration);
      }

      this.masterTl.add(tl, i * phaseDuration);
    }
  }

  update(time, scrollSpeedMultiplier) {
    // Global group rotation
    this.group.rotation.y += this.baseRotationSpeedY * 0.01 * scrollSpeedMultiplier;
    this.group.rotation.x += this.baseRotationSpeedX * 0.01 * scrollSpeedMultiplier;

    // Independent mesh wobble
    this.meshes.forEach((mesh, idx) => {
      if (mesh.material.opacity > 0.01) {
        mesh.parent.rotation.x = Math.sin(time * 0.5 + idx) * 0.2;
        mesh.parent.rotation.z = Math.cos(time * 0.3 + idx) * 0.2;
        
        // Procedural vertex displacement simulation (scale pulsing on parent wrapper to avoid fighting GSAP)
        const pulse = 1.0 + Math.sin(time * 3 + idx) * 0.02;
        mesh.parent.scale.set(pulse, pulse, pulse);
      }
    });
  }
}
