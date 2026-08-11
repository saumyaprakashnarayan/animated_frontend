// src/webglCarousel.js
import * as THREE from 'three';
import { gsap } from 'gsap';

export class WebGLCarousel {
  constructor(camera) {
    this.group = new THREE.Group();
    // Attach to camera so it stays fixed in the viewport
    camera.add(this.group);
    
    // Move it forward so it's visible to the camera. 
    // Shift it down by 400 units and right by 100 to avoid overlapping the HTML section title.
    this.group.position.set(100, -400, -1600);

    this.materials = [];
    this.currentAngle = 0;
    this.targetAngle = 0;
    this.radius = 1200;

    // Await font loading for canvas
    document.fonts.ready.then(() => {
      this.createCarousel();
    });
  }

  createCarousel() {
    const grid = document.querySelector('.services-grid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.service-card');
    const numCards = cards.length;
    if (numCards === 0) return;

    const anglePerCard = (Math.PI * 2) / numCards;
    
    // Each card covers a portion of the circle. 
    // We want a width of roughly 400. 400/1200 = 0.333 rad.
    const thetaLength = 400 / this.radius;

    cards.forEach((card, i) => {
      // 1. Render card content to Canvas
      const texture = this.createTextureFromCard(card);
      
      // 2. Create Geometry and Material
      const height = 400; // 3D units (matches width 400 for a square aspect ratio)
      
      const angle = i * anglePerCard;
      // Start the cylinder arc at `angle - thetaLength / 2` to center it on the angle
      const thetaStart = angle - thetaLength / 2;
      const geometry = new THREE.CylinderGeometry(this.radius, this.radius, height, 64, 1, true, thetaStart, thetaLength);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
        side: THREE.FrontSide // Hide back-facing cards to prevent clutter
      });
      this.materials.push(material);

      const mesh = new THREE.Mesh(geometry, material);
      this.group.add(mesh);
    });
  }

  createTextureFromCard(cardEl) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024; // Shorter height for a normal card look
    const ctx = canvas.getContext('2d');

    // Draw glossy background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, 'rgba(26, 26, 36, 0.92)');
    bgGrad.addColorStop(1, 'rgba(15, 15, 20, 0.98)');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw inset border
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
    
    // Top highlight glow
    const glow = ctx.createLinearGradient(0, 0, 0, 300);
    glow.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
    glow.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, canvas.width, 300);

    const num = cardEl.querySelector('.service-num')?.textContent || '';
    const title = cardEl.querySelector('h3')?.textContent || '';
    const desc = cardEl.querySelector('p')?.textContent || '';
    const tagElements = cardEl.querySelectorAll('.tag');

    // Draw Number
    ctx.fillStyle = '#C8FF00'; // Accent color
    ctx.font = '40px "Space Mono", monospace';
    ctx.fillText(num, 60, 80);

    // Draw Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '400 72px "Instrument Serif", serif';
    const titleEndY = this.wrapText(ctx, title, 60, 180, canvas.width - 120, 85);

    // Draw Desc
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.font = '400 32px "DM Sans", sans-serif';
    this.wrapText(ctx, desc, 60, titleEndY + 60, canvas.width - 120, 50);

    // Draw Tags
    let tagX = 60;
    let tagY = canvas.height - 100;
    ctx.font = '24px "Space Mono", monospace';
    
    // Process tags in reverse if you want them at the bottom, or just normal layout
    tagElements.forEach(tagEl => {
      const text = tagEl.textContent;
      const metrics = ctx.measureText(text);
      const width = metrics.width + 50; // padding
      
      // Wrap to next line if needed (unlikely for tags but just in case)
      if (tagX + width > canvas.width - 60) {
        tagX = 60;
        tagY += 60;
      }
      
      // Tag background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      ctx.roundRect(tagX, tagY - 35, width, 50, 25);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Tag text
      ctx.fillStyle = '#C8FF00';
      ctx.fillText(text, tagX + 25, tagY);
      
      tagX += width + 15;
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.generateMipmaps = true;
    return texture;
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for(let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
    return y;
  }

  setOpacity(opacity) {
    this.materials.forEach(mat => {
      gsap.to(mat, { opacity: opacity, duration: 0.5 });
    });
  }

  update(time) {
    // Smoothly interpolate rotation
    this.currentAngle += (this.targetAngle - this.currentAngle) * 0.1;
    this.group.rotation.y = this.currentAngle;
  }
}
