import * as THREE from 'three';

export class MaterialFactory {
  static createMaterials() {
    // 1. Particle Sphere (base geometry has a basic invisible mesh, particles handle the look)
    const m1_invisible = new THREE.MeshBasicMaterial({ 
      transparent: true, opacity: 0, wireframe: true, color: 0x000000 
    });

    // 2. Glass Icosahedron
    const m2_glass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 1.0, // glass effect
      ior: 1.5,
      thickness: 2.0,
      transparent: true,
      opacity: 0 // driven by GSAP
    });

    // 3. Energy Torus Knot
    const m3_energy = new THREE.MeshStandardMaterial({
      color: 0xC8FF00,
      emissive: 0x9d00ff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0,
      wireframe: false
    });

    // 4. Wireframe Cube
    const m4_wireframe = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.2,
      wireframe: true,
      transparent: true,
      opacity: 0
    });

    // 5. Floating Rings
    const m5_rings = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.1,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0
    });

    // 6. Metallic Dodecahedron
    const m6_metallic = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      metalness: 1.0,
      roughness: 0.2,
      envMapIntensity: 1.0,
      transparent: true,
      opacity: 0
    });

    // 7. Crystal Octahedron
    const m7_crystal = new THREE.MeshPhysicalMaterial({
      color: 0xaa55ff,
      metalness: 0.2,
      roughness: 0.0,
      transmission: 0.9,
      ior: 2.0,
      thickness: 5.0,
      transparent: true,
      opacity: 0
    });

    // 8. Energy Capsule
    const m8_capsule = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0xC8FF00,
      emissiveIntensity: 0.5,
      roughness: 0.6,
      transparent: true,
      opacity: 0,
      wireframe: true
    });

    // 9. Holographic Cylinder
    const m9_holo = new THREE.MeshPhysicalMaterial({
      color: 0x00d2ff,
      transmission: 0.8,
      opacity: 0,
      transparent: true,
      roughness: 0.1,
      wireframe: true
    });

    // 10. Ultimate Core
    const m10_ultimate = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x222222,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.5,
      thickness: 1.5,
      transparent: true,
      opacity: 0
    });

    return [
      m1_invisible,
      m2_glass,
      m3_energy,
      m4_wireframe,
      m5_rings,
      m6_metallic,
      m7_crystal,
      m8_capsule,
      m9_holo,
      m10_ultimate
    ];
  }
}
