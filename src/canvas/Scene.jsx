import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import AICluster from './AICluster';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 2]} // Performance tiering: cap pixel ratio at 2
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
    >
      <color attach="background" args={['#070708']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#ccff00" />
      
      <Suspense fallback={null}>
        <AICluster />
        
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={1.5} 
            radius={0.4}
          />
          <Noise opacity={0.03} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
