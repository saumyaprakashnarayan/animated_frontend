import * as THREE from 'three';

export class FluidBackground {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Create a plane that covers the entire camera view
    // Make it massive to ensure it covers all aspect ratios and camera parallax movements
    this.geometry = new THREE.PlaneGeometry(5000, 5000);

    // Shader Material for the fluid effect
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1.0 }, // Used for fading out on scroll
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform vec2 uResolution;
        varying vec2 vUv;

        // Ashima's 2D Simplex Noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        // Smooth maximum function for blending strands like liquid
        float smax(float a, float b, float k) {
            float h = clamp(0.5 + 0.5 * (a - b) / k, 0.0, 1.0);
            return mix(b, a, h) + k * h * (1.0 - h);
        }

        // Helper to generate a smooth, rounded ridge
        float getStrand(float d, float r) {
            float sqDist = (d * d) / (r * r);
            float h = clamp(1.0 - sqDist, 0.0, 1.0);
            return h * h * (3.0 - 2.0 * h); // smoothstep curve
        }

        // Fakes a 3D heightmap using 2D math
        float map(vec2 p, float time) {
            float h = 0.0;
            
            // Strand 1 (Main flowing curve)
            float wave1 = sin(p.x * 0.8 + time * 0.4) * 0.25 + sin(p.x * 0.3 - time * 0.2) * 0.15;
            float r1 = 0.25 + sin(p.x * 1.5 + time) * 0.05;
            h = smax(h, getStrand(p.y - wave1, r1) * 0.9, 0.15);
            
            // Strand 2 (Twisting counterpart)
            float wave2 = cos(p.x * 1.1 - time * 0.3) * 0.2 - sin(p.x * 0.6 + time * 0.5) * 0.1 - 0.05;
            float r2 = 0.18 + cos(p.x * 1.2 - time * 1.2) * 0.05;
            h = smax(h, getStrand(p.y - wave2, r2) * 0.8, 0.15);
            
            // Strand 3 (Thick background base)
            float wave3 = sin(p.x * 0.5 + time * 0.6) * 0.2 + 0.1;
            float r3 = 0.35;
            h = smax(h, getStrand(p.y - wave3, r3) * 0.7, 0.2);
            
            return h;
        }

        // Calculates a 3D normal from the 2D heightmap for glossy lighting
        vec3 calcNormal(vec2 p, float time) {
            float eps = 0.005;
            float hx = (map(p + vec2(eps, 0.0), time) - map(p - vec2(eps, 0.0), time)) / (2.0 * eps);
            float hy = (map(p + vec2(0.0, eps), time) - map(p - vec2(0.0, eps), time)) / (2.0 * eps);
            
            float heightScale = 0.5;
            vec3 n = vec3(-hx * heightScale, -hy * heightScale, 1.0);
            return normalize(n);
        }

        void main() {
          vec2 uv = vUv;
          vec2 p = uv * 2.0 - 1.0;
          
          p.x *= uResolution.x / uResolution.y;
          
          float time = uTime * 0.8; // Moderate speed for elegant flow
          
          // Deep premium dark forest green background (#07120a)
          vec3 bg = vec3(0.027, 0.071, 0.039); 
          vec3 col = bg;
          
          // Domain warping on position to make it look liquid and organic
          vec2 wp = p;
          wp.x += snoise(vec2(p.x * 0.8, time * 0.2)) * 0.2;
          wp.y += snoise(vec2(p.y * 0.8, time * 0.2)) * 0.1;
          
          float h = map(wp, time);
          
          if (h > 0.01) {
              vec3 n = calcNormal(wp, time);
              
              // Key Light (Top Right)
              vec3 lightDir = normalize(vec3(0.8, 0.8, 1.0)); 
              vec3 viewDir = vec3(0.0, 0.0, 1.0); 
              
              float diff = max(dot(n, lightDir), 0.0);
              
              // Glossy Specular Highlight
              vec3 halfVector = normalize(lightDir + viewDir);
              float spec = pow(max(dot(n, halfVector), 0.0), 80.0); 
              
              // Rim Light / Ambient Light (Bottom Left)
              vec3 lightDir2 = normalize(vec3(-0.8, -0.5, 0.5)); 
              float diff2 = max(dot(n, lightDir2), 0.0);
              
              // Forest Green & Neon Lime Palette
              vec3 colorDeep = vec3(0.027, 0.071, 0.039) * 0.5; // Dark forest core
              vec3 colorMid = vec3(0.1, 0.25, 0.15) * 0.6;      // Mid-tone green
              vec3 colorHigh = vec3(0.78, 1.0, 0.0) * 0.8;      // Electric neon lime
              vec3 colorVar = vec3(0.2, 0.4, 0.2) * 0.5;        // Sage variation
              
              // Color mapping based on height
              vec3 albedo = mix(colorDeep, colorMid, smoothstep(0.2, 0.7, h));
              albedo = mix(albedo, colorHigh, smoothstep(0.85, 1.0, h)); // Only highest peaks get neon
              
              albedo = mix(albedo, colorVar, sin(wp.x * 2.0 + time) * 0.15 + 0.15);
              
              vec3 litColor = albedo * (diff * 0.9 + 0.1); 
              litColor += mix(colorVar, colorHigh, 0.3) * spec * 0.6; 
              litColor += colorMid * diff2 * 0.5;
              
              float alpha = smoothstep(0.0, 0.1, h);
              col = mix(bg, litColor, alpha);
          }
          
          // Softly darken edges so the UI text pops
          col *= 1.0 - smoothstep(1.0, 3.0, length(p));
          
          // Dim the entire silk fluid slightly to preserve hero readability
          col *= 0.75;
          
          gl_FragColor = vec4(col, uOpacity);
        }
      `,
      transparent: true, // Need transparency to fade it out
      depthWrite: false, // Don't write to depth buffer so it stays in background
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    
    // Position far in the background
    this.mesh.position.set(0, 0, -200);
    this.group.add(this.mesh);
    
    // Handle window resize for uResolution
    window.addEventListener('resize', () => {
      this.material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    });
  }

  update(time) {
    this.material.uniforms.uTime.value = time;
    
    // Calculate scroll fade out. 
    // Assuming page scroll starts at 0. Fade out completely by 800px.
    const scrollY = window.scrollY || window.pageYOffset;
    let fade = 1.0 - (scrollY / 800.0);
    fade = Math.max(0.0, Math.min(1.0, fade)); // Clamp between 0 and 1
    
    this.material.uniforms.uOpacity.value = fade;
    
    // Optionally hide the group entirely if invisible to save rendering cost
    this.group.visible = fade > 0.0;
  }
}
