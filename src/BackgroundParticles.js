import * as THREE from 'three';

function createGlowingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export class BackgroundParticles {
  constructor(scene) {
    this.scene = scene;
    this.particleTexture = createGlowingTexture();
    
    // 1. STARDUST (Tiny, dense, twinkling)
    this.dustCount = 3000;
    this.dustGeom = new THREE.BufferGeometry();
    const dustPos = new Float32Array(this.dustCount * 3);
    const dustColors = new Float32Array(this.dustCount * 3);
    
    const cDeepGreen = new THREE.Color(0x013b20);    // Deep Forest Green
    const cEmerald = new THREE.Color(0x00f59b);      // Emerald
    const cMint = new THREE.Color(0xbaffdf);         // Pale Mint White

    for (let i = 0; i < this.dustCount; i++) {
      dustPos[i*3] = (Math.random() - 0.5) * 3000;
      dustPos[i*3+1] = (Math.random() - 0.5) * 3000;
      dustPos[i*3+2] = (Math.random() - 0.5) * 1000 - 500;
      
      const rand = Math.random();
      let col = cEmerald;
      if (rand > 0.8) col = cMint;
      else if (rand > 0.5) col = cDeepGreen;
      
      dustColors[i*3] = col.r;
      dustColors[i*3+1] = col.g;
      dustColors[i*3+2] = col.b;
    }
    this.dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    this.dustGeom.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
    
    this.dustMat = new THREE.PointsMaterial({
      size: 1.5,
      map: this.particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.dustPoints = new THREE.Points(this.dustGeom, this.dustMat);
    this.scene.add(this.dustPoints);

    // 2. BOKEH (Large, soft, out-of-focus orbs)
    this.bokehCount = 150;
    this.bokehGeom = new THREE.BufferGeometry();
    const bokehPos = new Float32Array(this.bokehCount * 3);
    const bokehColors = new Float32Array(this.bokehCount * 3);
    const bokehPhases = new Float32Array(this.bokehCount);
    
    for (let i = 0; i < this.bokehCount; i++) {
      bokehPos[i*3] = (Math.random() - 0.5) * 2000;
      bokehPos[i*3+1] = (Math.random() - 0.5) * 2000;
      bokehPos[i*3+2] = (Math.random() - 0.5) * 800 - 100;
      
      const rand = Math.random();
      let col = cDeepGreen;
      if(rand > 0.6) col = cEmerald;
      
      bokehColors[i*3] = col.r;
      bokehColors[i*3+1] = col.g;
      bokehColors[i*3+2] = col.b;
      
      bokehPhases[i] = Math.random() * Math.PI * 2;
    }
    
    this.bokehGeom.setAttribute('position', new THREE.BufferAttribute(bokehPos, 3));
    this.bokehGeom.setAttribute('color', new THREE.BufferAttribute(bokehColors, 3));
    this.bokehGeom.setAttribute('phase', new THREE.BufferAttribute(bokehPhases, 1));
    
    this.bokehMat = new THREE.PointsMaterial({
      size: 55.0, // Massive soft orbs
      map: this.particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.bokehPoints = new THREE.Points(this.bokehGeom, this.bokehMat);
    this.scene.add(this.bokehPoints);
  }

  update(time, scrollSpeedMultiplier, activePatternIndex, seasonIndex = 0, seasonColor = null) {
    // Ultra-smooth, slow drift to feel premium and luxurious
    this.dustPoints.rotation.y = time * 0.01;
    this.dustPoints.rotation.x = time * 0.005;
    
    this.bokehPoints.rotation.y = time * 0.015;
    this.bokehPoints.rotation.z = Math.sin(time * 0.1) * 0.05;
    
    // Smooth opacity pulse for bokeh
    this.bokehMat.opacity = 0.1 + (Math.sin(time * 1.5) * 0.04);
  }
}
