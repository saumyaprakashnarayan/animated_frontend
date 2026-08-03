import * as THREE from 'three';

export class App {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
    this.camera.position.z = 250;
    
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas, 
      alpha: true, 
      antialias: false // We will use FXAA in PostProcessing instead
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.clock = new THREE.Clock();
    
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  dispose() {
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }
}
