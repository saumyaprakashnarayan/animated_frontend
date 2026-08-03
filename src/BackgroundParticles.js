import * as THREE from 'three';

export class BackgroundParticles {
  constructor(scene) {
    this.scene = scene;
    
    this.particleCount = 15000;
    this.geometry = new THREE.BufferGeometry();
    
    // Arrays for different formations
    this.patterns = [];
    this.range = 1200;

    // Pattern 0: Random Dust
    const posRandom = new Float32Array(this.particleCount * 3);
    for (let i = 0; i < this.particleCount; i++) {
      posRandom[i * 3] = (Math.random() - 0.5) * this.range;
      posRandom[i * 3 + 1] = (Math.random() - 0.5) * this.range;
      posRandom[i * 3 + 2] = (Math.random() - 0.5) * this.range - 100;
    }
    this.patterns.push(posRandom);

    // Pattern 1: Grid Matrix
    const posGrid = new Float32Array(this.particleCount * 3);
    const side = Math.ceil(Math.pow(this.particleCount, 1/3)); // ~ 24.6
    const step = 800 / side;
    let idx = 0;
    for (let x = 0; x < side; x++) {
      for (let y = 0; y < side; y++) {
        for (let z = 0; z < side; z++) {
          if (idx < this.particleCount) {
            posGrid[idx * 3] = (x - side/2) * step;
            posGrid[idx * 3 + 1] = (y - side/2) * step;
            posGrid[idx * 3 + 2] = (z - side/2) * step - 100;
            idx++;
          }
        }
      }
    }
    this.patterns.push(posGrid);

    // Pattern 2: Double Helix
    const posHelix = new Float32Array(this.particleCount * 3);
    for (let i = 0; i < this.particleCount; i++) {
      const t = i / this.particleCount;
      const angle = t * Math.PI * 40; // 20 turns
      const radius = 200;
      const y = (t - 0.5) * 1000;
      // offset every other particle to the second strand (shifted by PI)
      const strandOffset = (i % 2 === 0) ? 0 : Math.PI; 
      posHelix[i * 3] = Math.cos(angle + strandOffset) * radius;
      posHelix[i * 3 + 1] = y;
      posHelix[i * 3 + 2] = Math.sin(angle + strandOffset) * radius - 100;
    }
    this.patterns.push(posHelix);

    // Pattern 3: Sphere Shell
    const posSphere = new Float32Array(this.particleCount * 3);
    const sphereRadius = 400;
    for (let i = 0; i < this.particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / this.particleCount);
      const theta = Math.sqrt(this.particleCount * Math.PI) * phi;
      posSphere[i * 3] = sphereRadius * Math.cos(theta) * Math.sin(phi);
      posSphere[i * 3 + 1] = sphereRadius * Math.sin(theta) * Math.sin(phi);
      posSphere[i * 3 + 2] = sphereRadius * Math.cos(phi) - 100;
    }
    this.patterns.push(posSphere);

    // Pattern 4: Sine Wave Surface
    const posWave = new Float32Array(this.particleCount * 3);
    const waveSize = Math.ceil(Math.sqrt(this.particleCount));
    const waveStep = 1000 / waveSize;
    for (let i = 0; i < this.particleCount; i++) {
      const x = i % waveSize;
      const z = Math.floor(i / waveSize);
      const worldX = (x - waveSize/2) * waveStep;
      const worldZ = (z - waveSize/2) * waveStep;
      const worldY = Math.sin(worldX * 0.01) * Math.cos(worldZ * 0.01) * 200;
      posWave[i * 3] = worldX;
      posWave[i * 3 + 1] = worldY;
      posWave[i * 3 + 2] = worldZ - 100;
    }
    this.patterns.push(posWave);

    // Pattern 5: Cylinder Tube
    const posCylinder = new Float32Array(this.particleCount * 3);
    for (let i = 0; i < this.particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1200;
      const r = 300;
      posCylinder[i * 3] = Math.cos(theta) * r;
      posCylinder[i * 3 + 1] = y;
      posCylinder[i * 3 + 2] = Math.sin(theta) * r - 100;
    }
    this.patterns.push(posCylinder);

    // Initial state is Pattern 0
    const currentPositions = new Float32Array(this.patterns[0]);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

    this.material = new THREE.PointsMaterial({
      color: 0x8a8a9a,
      size: 1.2,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);

    // Inner glowing aura remains unchanged
    this.innerCount = 500;
    this.innerGeom = new THREE.BufferGeometry();
    const innerPos = new Float32Array(this.innerCount * 3);
    for (let i = 0; i < this.innerCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 40 + Math.random() * 40;
      innerPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      innerPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      innerPos[i * 3 + 2] = r * Math.cos(phi);
    }
    this.innerGeom.setAttribute('position', new THREE.BufferAttribute(innerPos, 3));
    this.innerMat = new THREE.PointsMaterial({
      color: 0xC8FF00,
      size: 2.0,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.innerPoints = new THREE.Points(this.innerGeom, this.innerMat);
    this.scene.add(this.innerPoints);
  }

  update(time, scrollSpeedMultiplier, activePatternIndex) {
    // Determine the target pattern (round it since GSAP might tween it as a float)
    const index = Math.round(activePatternIndex || 0);
    const targetPattern = this.patterns[index] || this.patterns[0];
    const positions = this.geometry.attributes.position.array;
    
    // Lerp particle positions toward the target pattern
    let needsUpdate = false;
    for (let i = 0; i < this.particleCount * 3; i++) {
      const diff = targetPattern[i] - positions[i];
      if (Math.abs(diff) > 0.5) {
        positions[i] += diff * 0.03; // Smooth morphing speed
        needsUpdate = true;
      }
    }
    
    if (needsUpdate) {
      this.geometry.attributes.position.needsUpdate = true;
    }

    // Slow drift of the entire point cloud
    this.points.rotation.y = time * 0.015 * scrollSpeedMultiplier;
    this.points.rotation.x = time * 0.005;

    // Faster orbiting of inner aura
    this.innerPoints.rotation.y = time * 0.1 * scrollSpeedMultiplier;
    this.innerPoints.rotation.z = Math.sin(time * 0.2) * 0.1;
    this.innerMat.opacity = 0.5 + Math.sin(time * 3) * 0.3;
  }
}
