'use client';
import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface AnimatedCubeProps {
  position: [number, number, number];
  index: number;
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({ position, index }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Different colors for different faces
  const colors = useMemo(() => [
    '#1a1a1a', // front - dark gray
    '#2a2a2a', // back - slightly lighter
    '#0ea5e9', // right - blue accent
    '#8b5cf6', // left - purple accent  
    '#ef4444', // top - red accent
    '#10b981', // bottom - green accent
  ], []);

  useFrame((state) => {
    if (meshRef.current) {
      // Individual cube animations
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time + index * 0.1) * 0.1;
      meshRef.current.rotation.z = Math.cos(time + index * 0.1) * 0.1;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      {colors.map((color, faceIndex) => (
        <meshStandardMaterial
          key={faceIndex}
          attach={`material-${faceIndex}`}
          color={color}
          metalness={0.4}
          roughness={0.3}
          transparent
          opacity={hovered ? 0.8 : 0.9}
        />
      ))}
      {/* Wireframe edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.9, 0.9, 0.9)]} />
        <lineBasicMaterial color="#ffffff" linewidth={1} transparent opacity={0.6} />
      </lineSegments>
    </mesh>
  );
};

export const AnimatedRubiksCube: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  
  // Generate all 27 cube positions
  const cubePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          positions.push([x * 1.1, y * 1.1, z * 1.1]);
        }
      }
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.x += delta * 0.15;
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setAutoRotate(false)}
      onPointerOut={() => setAutoRotate(true)}
    >
      {cubePositions.map((position, index) => (
        <AnimatedCube 
          key={index} 
          position={position}
          index={index}
        />
      ))}
    </group>
  );
};