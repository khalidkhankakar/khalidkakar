'use client';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface CubeProps {
  position: [number, number, number];
  color?: string;
}

const SingleCube: React.FC<CubeProps> = ({ position, color = '#1a1a1a' }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      <meshStandardMaterial 
        color={color}
        metalness={0.3}
        roughness={0.4}
        transparent
        opacity={0.9}
      />
      {/* White edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.95, 0.95, 0.95)]} />
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </lineSegments>
    </mesh>
  );
};

export const RubiksCube: React.FC = () => {
  const groupRef = useRef<Group>(null);
  
  // Generate cube positions (3x3x3 grid)
  const cubePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          positions.push([x, y, z]);
        }
      }
    }
    return positions;
  }, []);

  // Auto-rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {cubePositions.map((position, index) => (
        <SingleCube 
          key={index} 
          position={position}
          color={`hsl(${index * 13}, 0%, ${10 + (index % 3) * 5}%)`}
        />
      ))}
    </group>
  );
};
