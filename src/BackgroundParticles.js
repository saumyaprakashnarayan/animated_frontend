import * as THREE from 'three';

export class BackgroundParticles {
  constructor(scene) {
    this.scene = scene;

    this.particleCount = 15000;
    this.geometry = new THREE.BufferGeometry();

    // Arrays for different formations
    this.patterns = [];
    this.range = 1200;

    // Generate colors (70% White, 20% Blue, 10% Green)
    const colors = new Float32Array(this.particleCount * 3);
    const colorWhite = new THREE.Color(0xffffff);
    const colorBlue = new THREE.Color(0x38BDF8);
    const colorGreen = new THREE.Color(0xC8FF00);

    for (let i = 0; i < this.particleCount; i++) {
      const rand = Math.random();
      let targetColor;
      if (rand < 0.7) {
        targetColor = colorWhite;
      } else if (rand < 0.9) {
        targetColor = colorBlue;
      } else {
        targetColor = colorGreen;
      }
      colors[i * 3] = targetColor.r;
      colors[i * 3 + 1] = targetColor.g;
      colors[i * 3 + 2] = targetColor.b;
    }
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

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
    const side = Math.ceil(Math.pow(this.particleCount, 1 / 3)); // ~ 24.6
    const step = 800 / side;
    let idx = 0;
    for (let x = 0; x < side; x++) {
      for (let y = 0; y < side; y++) {
        for (let z = 0; z < side; z++) {
          if (idx < this.particleCount) {
            posGrid[idx * 3] = (x - side / 2) * step;
            posGrid[idx * 3 + 1] = (y - side / 2) * step;
            posGrid[idx * 3 + 2] = (z - side / 2) * step - 100;
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
      const worldX = (x - waveSize / 2) * waveStep;
      const worldZ = (z - waveSize / 2) * waveStep;
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
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: false
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
      size: 1.4,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: false
    });
    this.innerPoints = new THREE.Points(this.innerGeom, this.innerMat);
    this.scene.add(this.innerPoints);

    // ==========================================
    // PATTERN 6: MOVING STREAKS (Data Stream)
    // ==========================================
    this.gridGeom = new THREE.BufferGeometry();
    const gridPositions = [];
    const gridColors = [];
    const numStreaks = 2500;
    this.gridStep = 2000; // The seamless wrap distance
    const cBlue = new THREE.Color(0x38BDF8);
    const cGreen = new THREE.Color(0xC8FF00);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < numStreaks; i++) {
      const x = (Math.random() - 0.5) * 4000;
      const y = (Math.random() - 0.5) * 3000;
      const z = Math.random() * -this.gridStep; // 0 down to -2000
      const length = 40 + Math.random() * 150; // Random streak length

      let col;
      const randColor = Math.random();
      if (randColor > 0.8) col = cWhite;
      else if (randColor > 0.4) col = cBlue;
      else col = cGreen;

      // 1. Original chunk
      gridPositions.push(x, y, z);
      gridPositions.push(x, y, z + length);
      gridColors.push(col.r, col.g, col.b);
      gridColors.push(col.r, col.g, col.b);

      // 2. Seamless Duplicate chunk (shifted by -gridStep)
      gridPositions.push(x, y, z - this.gridStep);
      gridPositions.push(x, y, z - this.gridStep + length);
      gridColors.push(col.r, col.g, col.b);
      gridColors.push(col.r, col.g, col.b);
    }

    this.gridGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(gridPositions), 3));
    this.gridGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(gridColors), 3));

    this.gridMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0, // Hidden by default
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.gridLines = new THREE.LineSegments(this.gridGeom, this.gridMat);
    this.scene.add(this.gridLines);
  }

  update(time, scrollSpeedMultiplier, activePatternIndex, seasonIndex = 0, seasonColor = null) {
    // Apply seasonal color tint
    if (seasonColor) {
      this.material.color.copy(seasonColor);
      this.innerMat.color.copy(seasonColor);
      this.gridMat.color.copy(seasonColor);
    }

    // Determine the target pattern (round it since GSAP might tween it as a float)
    const index = Math.round(activePatternIndex || 0);
    const targetPattern = this.patterns[index] || this.patterns[0];
    const positions = this.geometry.attributes.position.array;

    // Ease-out cubic interpolation: fast start, graceful deceleration as particles approach target
    // This creates the organic, fluid feel rather than a mechanical linear slide
    let needsUpdate = false;
    for (let i = 0; i < this.particleCount * 3; i++) {
      const diff = targetPattern[i] - positions[i];
      const absDiff = Math.abs(diff);
      if (absDiff > 0.1) {
        // Adaptive speed: faster when far away, almost stops when close (ease-out)
        // t is normalized distance (0=close, 1=far)
        const t = Math.min(absDiff / 300, 1.0);
        // Ease-out cubic: speed ramps from ~5% to ~20% of distance for a quicker, smooth transition
        const eased = 0.05 + t * t * t * 0.15;
        positions[i] += diff * eased;
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      this.geometry.attributes.position.needsUpdate = true;
    }

    // Handle Pattern 6: Crossfade and animate the Grid Lines
    if (index === 6) {
      // Fade out dots (both background and inner aura)
      this.material.opacity = THREE.MathUtils.lerp(this.material.opacity, 0, 0.05);
      this.innerMat.opacity = THREE.MathUtils.lerp(this.innerMat.opacity, 0, 0.05);

      // Fade in lines — slower crossfade for premium feel
      this.gridMat.opacity = THREE.MathUtils.lerp(this.gridMat.opacity, 1.0, 0.025);

      // Move the streaks at a calm, steady pace
      this.gridLines.position.z += 6;
      if (this.gridLines.position.z > this.gridStep) {
        this.gridLines.position.z -= this.gridStep; // Seamless wrap
      }
    } else {
      // Fade in dots — slow, graceful return
      this.material.opacity = THREE.MathUtils.lerp(this.material.opacity, 0.35, 0.02);

      // Fade out lines
      this.gridMat.opacity = THREE.MathUtils.lerp(this.gridMat.opacity, 0, 0.025);
    }

    // Seasonal ambient physics
    let driftY = time * 0.004;
    let driftX = time * 0.001;
    let auraY = time * 0.03;
    let auraZ = Math.sin(time * 0.08) * 0.05;

    if (seasonIndex === 0) {
      // Spring: Upward diagonal drift (pollen/blossoms)
      driftY = time * 0.02;
      driftX = time * 0.01;
    } else if (seasonIndex === 1) {
      // Summer: Shimmering heat
      driftY = time * 0.05;
      driftX = Math.sin(time * 0.5) * 0.02;
    } else if (seasonIndex === 2) {
      // Autumn: Swirling horizontal wind
      driftY = time * 0.08;
      driftX = time * 0.03;
      auraZ = Math.cos(time * 0.2) * 0.1;
    } else if (seasonIndex === 3) {
      // Winter: Downward drift (snow)
      driftY = -time * 0.015;
      driftX = Math.sin(time * 0.1) * 0.005;
    }

    this.points.rotation.y = driftY;
    this.points.rotation.x = driftX;

    this.innerPoints.rotation.y = auraY;
    this.innerPoints.rotation.z = auraZ;

    // Only update inner aura opacity when not in grid mode
    if (index !== 6) {
      this.innerMat.opacity = THREE.MathUtils.lerp(this.innerMat.opacity, 0.15 + Math.sin(time * 0.8) * 0.05, 0.02);
    }
  }
}
