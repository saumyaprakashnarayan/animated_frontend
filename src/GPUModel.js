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
      color: 0x051020,
      metalness: 0.6,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7, // Lower opacity so the inner core is clearly visible
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

    // 5. Realistic Silicon Die (The Core)
    const coreGeom = new THREE.BoxGeometry(20, 20, 1.5);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x020202, // Dark silicon
      emissive: 0x00f0ff,
      emissiveIntensity: 2.0,
      metalness: 0.9,
      roughness: 0.1
    });
    this.coreMesh = new THREE.Mesh(coreGeom, coreMat);
    this.coreMesh.position.z = 1.5; // Sitting exactly on top of the inner circuit board
    this.group.add(this.coreMesh);

    // 6. PointLight for ambient volumetric glow inside the glass
    this.coreLight = new THREE.PointLight(0x00ffff, 40, 100); 
    this.coreLight.position.set(0, 0, 4);
    this.group.add(this.coreLight);

    // 7. Realistic Data Streams (Fading light beams using Vertex Colors)
    const beamCount = 150;
    const beamGeom = new THREE.BufferGeometry();
    const beamPos = new Float32Array(beamCount * 2 * 3);
    const beamColors = new Float32Array(beamCount * 2 * 3);
    
    const colorBase = new THREE.Color(0x00ffff);
    const colorTip = new THREE.Color(0x000000); // Black becomes transparent in Additive Blending

    for(let i=0; i<beamCount; i++) {
      // Confine beams to the silicon die area
      const px = (Math.random() - 0.5) * 18;
      const py = (Math.random() - 0.5) * 18;
      
      // Start point (on the die)
      beamPos[i*6] = px; beamPos[i*6+1] = py; beamPos[i*6+2] = 2.5;
      beamColors[i*6] = colorBase.r; beamColors[i*6+1] = colorBase.g; beamColors[i*6+2] = colorBase.b;
      
      // End point (shooting up, length varies)
      beamPos[i*6+3] = px; beamPos[i*6+4] = py; beamPos[i*6+5] = 20 + Math.random() * 40;
      beamColors[i*6+3] = colorTip.r; beamColors[i*6+4] = colorTip.g; beamColors[i*6+5] = colorTip.b;
    }
    
    beamGeom.setAttribute('position', new THREE.BufferAttribute(beamPos, 3));
    beamGeom.setAttribute('color', new THREE.BufferAttribute(beamColors, 3));

    this.beamMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
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
    
    // Increase multiplier here to make the central circuit board glow
    if (this.innerMesh.material[4]) {
      this.innerMesh.material[4].emissiveIntensity = pulse * 3.0; 
      this.innerMesh.material[5].emissiveIntensity = pulse * 3.0;
    }
    
    if (this.edgeMat) {
      const baseColor = new THREE.Color(0x00f0ff);
      baseColor.multiplyScalar(0.2 + pulseProgress * 0.3); // Dimmer edges
      this.edgeMat.color.copy(baseColor);
      this.edgeMat.opacity = 0.2; 
    }
    
    // Animate the realistic Core and Beams
    if (this.coreMesh) {
      this.coreMesh.material.emissiveIntensity = 2.0 + pulseProgress * 6.0; // intense thumping core
    }
    if (this.coreLight) {
      this.coreLight.intensity = 20 + pulseProgress * 60; // ambient light pulses
    }
    if (this.beamMat) {
      this.beamMat.opacity = 0.5 + pulseProgress * 0.5; // Beams pulse in sync
      this.beams.position.z = Math.sin(time * 5.0) * 0.5; // Beams literally flow upwards slightly
    }
  }
}
