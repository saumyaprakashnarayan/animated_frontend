import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AICluster = () => {
  const groupRef = useRef();
  const particlesRef = useRef();
  const linesRef = useRef();

  const particleCount = 2000;
  const radius = 8;

  // Generate particles
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    const colorCyan = new THREE.Color('#00f0ff');
    const colorChartreuse = new THREE.Color('#ccff00');
    
    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = radius * Math.cbrt(Math.random());
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Interpolate colors based on y position
      const mixedColor = colorCyan.clone().lerp(colorChartreuse, (pos[i * 3 + 1] + radius) / (radius * 2));
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    
    return [pos, col];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }

    if (particlesRef.current) {
      // Subtle pulsing
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Add noise/breathing effect
        // We avoid heavy calculations per frame, just simple wave
      }
      // particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core AI Entity/Grid Box representing a cluster */}
      <mesh>
        <boxGeometry args={[4, 4, 4, 4, 4, 4]} />
        <meshPhysicalMaterial 
          color="#070708"
          emissive="#00f0ff"
          emissiveIntensity={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Surrounding Data Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export default AICluster;
