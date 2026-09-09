import * as THREE from 'three';

export class GPUModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    
    this.loaded = true;

    // Create the procedural chipset

    // 1. Generate Circuit Texture using Canvas
    const circuitTex = this.createCircuitTexture();
    
    // 2. Glass Outer Shell
    const width = 100;
    const height = 100;
    const radius = 15;
    
    const shape = new THREE.Shape();
    shape.moveTo(-width/2 + radius, -height/2);
    shape.lineTo(width/2 - radius, -height/2);
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    shape.lineTo(width/2, height/2 - radius);
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    shape.lineTo(-width/2 + radius, height/2);
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    shape.lineTo(-width/2, -height/2 + radius);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);

    const extrudeSettings = {
      steps: 1,
      depth: 8,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 3,
      bevelOffset: 0,
      bevelSegments: 16
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x051530,
      metalness: 0.1,
      roughness: 0.05,
      transparent: true,
      transmission: 0.95, // Glass effect
      opacity: 1,
      ior: 1.5,
      thickness: 15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide
    });
    
    this.glassMesh = new THREE.Mesh(geometry, glassMaterial);
    this.group.add(this.glassMesh);

    // 3. Glowing Edges
    const edgeGeom = new THREE.EdgesGeometry(geometry);
    this.edgeMat = new THREE.LineBasicMaterial({ 
      color: 0x00f0ff, 
      transparent: true, 
      opacity: 0.8 
    });
    const edges = new THREE.LineSegments(edgeGeom, this.edgeMat);
    this.group.add(edges);

    // 4. Inner Circuit Board
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      map: circuitTex,
      emissive: 0x00f0ff,
      emissiveMap: circuitTex,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8,
      side: THREE.DoubleSide
    });

    const innerBoxGeom = new THREE.BoxGeometry(90, 90, 2);
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x050a15, roughness: 0.9 });
    const innerBoxMat = [
      darkMat, // sides
      darkMat,
      darkMat,
      darkMat,
      innerMaterial, // front
      innerMaterial  // back
    ];
    
    this.innerMesh = new THREE.Mesh(innerBoxGeom, innerBoxMat);
    this.group.add(this.innerMesh);

    // 5. Central Glowing Core (Matches the reference pic)
    // Positioned at z=4.5 to protrude OUTSIDE the dark glass (glass front is at z=4)
    const coreGeom = new THREE.BoxGeometry(32, 32, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9,
    });
    this.coreMesh = new THREE.Mesh(coreGeom, coreMat);
    this.coreMesh.position.z = 4.5; 
    this.group.add(this.coreMesh);

    // 5b. Guaranteed Sprite Glow (in case post-processing bloom is disabled)
    const glowTex = this.createGlowTexture();
    const spriteMat = new THREE.SpriteMaterial({ 
      map: glowTex, 
      color: 0x00ffff, 
      transparent: true, 
      blending: THREE.AdditiveBlending,
      opacity: 1.0,
      depthWrite: false
    });
    this.glowSprite = new THREE.Sprite(spriteMat);
    this.glowSprite.scale.set(150, 150, 1);
    this.glowSprite.position.z = 5;
    this.group.add(this.glowSprite);

    // 6. PointLight for the intense core glow
    this.coreLight = new THREE.PointLight(0x00ffff, 100, 200); 
    this.coreLight.position.set(0, 0, 8);
    this.group.add(this.coreLight);

    // 7. Vertical Light Beams (Shooting upwards)
    const beamCount = 60;
    const beamGeom = new THREE.BufferGeometry();
    const beamPos = new Float32Array(beamCount * 2 * 3);
    for(let i=0; i<beamCount; i++) {
      const px = (Math.random() - 0.5) * 30;
      const py = (Math.random() - 0.5) * 30;
      // start point (outside glass)
      beamPos[i*6] = px; beamPos[i*6+1] = py; beamPos[i*6+2] = 4.5;
      // end point (shooting out)
      beamPos[i*6+3] = px; beamPos[i*6+4] = py; beamPos[i*6+5] = 40 + Math.random() * 100;
    }
    beamGeom.setAttribute('position', new THREE.BufferAttribute(beamPos, 3));
    this.beamMat = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.beams = new THREE.LineSegments(beamGeom, this.beamMat);
    this.group.add(this.beams);

    // Initial pose
    this.group.rotation.x = Math.PI / 8;
    this.group.rotation.y = -Math.PI / 6;
    
    console.log('Procedural Chipset Model loaded.');
  }

  createCircuitTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#050a15';
    ctx.fillRect(0, 0, 1024, 1024);
    
    // Styling
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00f0ff';
  
    const cx = 512;
    const cy = 512;
  
    // Intense Central Glow (Radial Gradient)
    const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 300);
    glowGradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); 
    glowGradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)'); 
    glowGradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
    
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(cx, cy, 300, 0, Math.PI * 2);
    ctx.fill();

    // Central Chip
    ctx.fillStyle = '#ffffff'; // White for maximum emissive brightness
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 40;
    ctx.beginPath();
    ctx.roundRect(cx - 140, cy - 140, 280, 280, 20);
    ctx.fill();
    ctx.stroke();
    
    // Reset shadow for the rest of the traces
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 15;
  
    // Corner brackets
    ctx.lineWidth = 8;
    const s = 110;
    const o = 90;
    ctx.beginPath(); ctx.moveTo(cx - s, cy - o); ctx.lineTo(cx - s, cy - s); ctx.lineTo(cx - o, cy - s); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + o, cy - s); ctx.lineTo(cx + s, cy - s); ctx.lineTo(cx + s, cy - o); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - s, cy + o); ctx.lineTo(cx - s, cy + s); ctx.lineTo(cx - o, cy + s); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + o, cy + s); ctx.lineTo(cx + s, cy + s); ctx.lineTo(cx + s, cy + o); ctx.stroke();
    
    ctx.lineWidth = 8;
  
    function drawLine(startX, startY, pts) {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      for(let i=0; i<pts.length; i++) {
         ctx.lineTo(pts[i][0], pts[i][1]);
      }
      ctx.stroke();
      
      const last = pts[pts.length-1];
      ctx.beginPath();
      ctx.arc(last[0], last[1], 10, 0, Math.PI*2);
      ctx.fillStyle = '#00f0ff';
      ctx.fill();
    }
  
    // Symmetrical routing
    const quadrants = [ [1, 1], [-1, 1], [-1, -1], [1, -1] ];
  
    for (let q of quadrants) {
      let dx = q[0];
      let dy = q[1];
      
      drawLine(cx + 160*dx, cy + 20*dy, [
        [cx + 250*dx, cy + 20*dy], [cx + 280*dx, cy + 50*dy], [cx + 420*dx, cy + 50*dy]
      ]);
      
      drawLine(cx + 160*dx, cy + 60*dy, [
        [cx + 220*dx, cy + 60*dy], [cx + 280*dx, cy + 120*dy], [cx + 400*dx, cy + 120*dy]
      ]);
      
      drawLine(cx + 160*dx, cy + 100*dy, [
        [cx + 200*dx, cy + 100*dy], [cx + 250*dx, cy + 150*dy], [cx + 300*dx, cy + 150*dy], [cx + 330*dx, cy + 180*dy], [cx + 420*dx, cy + 180*dy]
      ]);
      
      drawLine(cx + 160*dx, cy + 140*dy, [
        [cx + 180*dx, cy + 140*dy], [cx + 220*dx, cy + 180*dy], [cx + 220*dx, cy + 300*dy], [cx + 270*dx, cy + 350*dy], [cx + 400*dx, cy + 350*dy]
      ]);
  
      drawLine(cx + 20*dx, cy + 160*dy, [
        [cx + 20*dx, cy + 250*dy], [cx + 50*dx, cy + 280*dy], [cx + 50*dx, cy + 420*dy]
      ]);
      
      drawLine(cx + 60*dx, cy + 160*dy, [
        [cx + 60*dx, cy + 220*dy], [cx + 120*dx, cy + 280*dy], [cx + 120*dx, cy + 400*dy]
      ]);
      
      drawLine(cx + 100*dx, cy + 160*dy, [
        [cx + 100*dx, cy + 200*dy], [cx + 150*dx, cy + 250*dy], [cx + 150*dx, cy + 300*dy], [cx + 180*dx, cy + 330*dy], [cx + 180*dx, cy + 420*dy]
      ]);
  
      // Corner pads
      ctx.beginPath();
      ctx.roundRect(cx + 350*dx - 20, cy + 350*dy - 20, 40, 40, 5);
      ctx.stroke();
    }
  
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }

  update(time, scrollSpeedMultiplier) {
    if (!this.loaded) return;

    // Gentle floating and rotation
    this.group.rotation.y = -Math.PI / 6 + Math.sin(time * 0.3) * 0.2;
    this.group.rotation.x = Math.PI / 8 + Math.sin(time * 0.5) * 0.1;
    this.group.position.y = Math.sin(time * 1.2) * 3;

    // Pulsing glow
    const cycleTime = time % 4.0;
    let pulseProgress = 0;
    if (cycleTime < 2.0) {
      const p = cycleTime / 2.0;
      pulseProgress = p * p * (3 - 2 * p);
    } else {
      const p = (cycleTime - 2.0) / 2.0;
      pulseProgress = 1.0 - (p * p * (3 - 2 * p));
    }
    
    // Modulate edge and circuit brightness
    const pulse = 1.0 + pulseProgress * 2.0; // Stronger pulse factor
    
    // Increase multiplier here to make the central part glow much more
    if (this.innerMesh.material[4]) {
      this.innerMesh.material[4].emissiveIntensity = pulse * 10.0; // Cranked up massively
      this.innerMesh.material[5].emissiveIntensity = pulse * 10.0;
    }
    
    if (this.edgeMat) {
      // Drastically reduce edge glow so it does not overpower the center
      const baseColor = new THREE.Color(0x00f0ff);
      baseColor.multiplyScalar(0.2 + pulseProgress * 0.3); // Dimmer edges
      this.edgeMat.color.copy(baseColor);
      this.edgeMat.opacity = 0.2; // Highly transparent to soften the line
    }
    
    // Animate the new Core, Glow, and Beams
    if (this.coreMesh) {
      this.coreMesh.material.opacity = 0.6 + pulseProgress * 0.4;
    }
    if (this.glowSprite) {
      this.glowSprite.material.opacity = 0.8 + pulseProgress * 0.5;
      const scale = 120 + pulseProgress * 40;
      this.glowSprite.scale.set(scale, scale, 1);
    }
    if (this.coreLight) {
      this.coreLight.intensity = 50 + pulseProgress * 150; // intense light pulses
    }
    if (this.beamMat) {
      this.beamMat.opacity = 0.5 + pulseProgress * 0.5; // Beams pulse in sync
      this.beams.scale.z = 1.0 + Math.sin(time * 10.0) * 0.1; // slight shimmering vibration
    }
  }

  createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(0, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }
}
