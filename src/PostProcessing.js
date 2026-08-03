import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

export class PostProcessing {
  constructor(renderer, scene, camera) {
    this.composer = new EffectComposer(renderer);
    
    // Render Pass
    const renderPass = new RenderPass(scene, camera);
    this.composer.addPass(renderPass);

    // FXAA Pass for anti-aliasing
    this.fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
    this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
    this.composer.addPass(this.fxaaPass);

    // Unreal Bloom Pass for cinematic glows
    // Vector2(resX, resY), strength, radius, threshold
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.8,
      0.15
    );
    this.composer.addPass(this.bloomPass);
  }

  resize(width, height, pixelRatio) {
    this.composer.setSize(width, height);
    this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (width * pixelRatio);
    this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (height * pixelRatio);
  }

  render() {
    this.composer.render();
  }
}
