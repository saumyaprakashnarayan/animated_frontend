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
  
    // Central Chip
    ctx.fillStyle = '#00aaff';
    ctx.beginPath();
    ctx.roundRect(cx - 140, cy - 140, 280, 280, 20);
    ctx.fill();
    ctx.stroke();
  
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
    const pulse = 1.0 + pulseProgress * 1.5;
    
    // Assuming the front/back materials are at indices 4 and 5
    // Increase multiplier here to make the central part glow much more
    if (this.innerMesh.material[4]) {
      this.innerMesh.material[4].emissiveIntensity = pulse * 3.0;
      this.innerMesh.material[5].emissiveIntensity = pulse * 3.0;
    }
    
    if (this.edgeMat) {
      // Drastically reduce edge glow so it does not overpower the center
      const baseColor = new THREE.Color(0x00f0ff);
      baseColor.multiplyScalar(0.5 + pulseProgress * 0.5);
      this.edgeMat.color.copy(baseColor);
      this.edgeMat.opacity = 0.6; // Slightly transparent to soften the line
    }
  }
}
