import * as THREE from 'three';

export class FluidBackground {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Create a plane that covers the entire camera view
    // Assuming a standard camera setup, these dimensions will cover it at z=-100
    this.geometry = new THREE.PlaneGeometry(1000, 1000);

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

        // Fractal Brownian Motion
        float fbm(vec2 x) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(100.0);
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
            for (int i = 0; i < 5; ++i) {
                v += a * snoise(x);
                x = rot * x * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main() {
          // Stretch UVs to create horizontal ribbon flow
          vec2 p = vec2(vUv.x * 0.4, vUv.y * 1.5);
          
          // Animate slowly with time
          float t = uTime * 0.15;
          
          // Smooth domain warping
          vec2 q = vec2(0.);
          q.x = fbm( p + vec2(t) );
          q.y = fbm( p + vec2(1.0) );
          
          vec2 r = vec2(0.);
          r.x = fbm( p + 1.0*q + vec2(1.7,9.2)+ 0.1*t );
          r.y = fbm( p + 1.0*q + vec2(8.3,2.8)+ 0.08*t );
          
          float f = fbm(p + r);
          
          // Color Palette matching tech/green brand (Mostly dark!)
          vec3 color1 = vec3(0.6, 1.0, 0.0); // Bright Neon Green (Highlights)
          vec3 color2 = vec3(0.02, 0.02, 0.03); // Almost Black/Dark Slate (Background)
          vec3 color3 = vec3(0.0, 0.2, 0.1); // Deep Emerald/Forest Green (Midtones)
          
          // Softly mix colors - favor the dark background heavily
          // f usually ranges from 0.0 to 1.0
          vec3 col = mix(color2, color3, clamp(f * 1.5, 0.0, 1.0)); 
          
          // Only add neon green where the noise is very high (the peaks/edges of the ribbon)
          float highlight = smoothstep(0.6, 1.0, f);
          col = mix(col, color1, highlight * 0.8);
          
          // Add some depth with r.x
          col = mix(col, color2, clamp(length(r.x) * 0.5, 0.0, 1.0));
          
          // Final darkening pass so text remains highly visible
          col *= 0.6;

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
