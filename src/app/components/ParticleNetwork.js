'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkParticles() {
  const meshRef = useRef();
  const linesRef = useRef();
  
  // Configuration
  const particleCount = 50;
  const maxDistance = 3;
  
  // Generate particles positions
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions in a cube
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      
      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);
  
  // Animation frame
  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const linePositions = [];
    const lineColors = [];
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Update positions based on velocities
      positions[i3] += particles.velocities[i3];
      positions[i3 + 1] += particles.velocities[i3 + 1];
      positions[i3 + 2] += particles.velocities[i3 + 2];
      
      // Boundary conditions (bounce off walls)
      if (Math.abs(positions[i3]) > 4) particles.velocities[i3] *= -1;
      if (Math.abs(positions[i3 + 1]) > 3) particles.velocities[i3 + 1] *= -1;
      if (Math.abs(positions[i3 + 2]) > 2) particles.velocities[i3 + 2] *= -1;
    }
    
    // Generate connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < maxDistance) {
          // Add line between particles
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
          
          // Color based on distance (closer = more visible)
          const alpha = 1 - (distance / maxDistance);
          const greyValue = 0.3 + alpha * 0.4; // Range from dark grey to lighter grey
          
          lineColors.push(
            greyValue, greyValue, greyValue, alpha,
            greyValue, greyValue, greyValue, alpha
          );
        }
      }
    }
    
    // Update geometries
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    if (linePositions.length > 0) {
      linesRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      linesRef.current.geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(lineColors, 4)
      );
    }
  });
  
  return (
    <>
      {/* Particles */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#333333"
          transparent
          opacity={0.8}
        />
      </points>
      
      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          transparent
          vertexColors
          opacity={0.6}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleNetwork() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NetworkParticles />
      </Canvas>
    </div>
  );
} 