'use client';
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';
import { RoundedBoxGeometry } from './rounded-box-geometry';
import { useTheme } from 'next-themes';

interface CubeProps {
  position: [number, number, number];
  index: number;
  isDark: boolean;
}

const GlossyCube: React.FC<CubeProps> = ({ position, index, isDark }) => {
  const meshRef = useRef<Mesh>(null);
  
  // Create the rounded box geometry using useMemo for performance
  const roundedGeometry = useMemo(() => {
    return new RoundedBoxGeometry(0.94, 0.94, 0.94, 4, 0.05);
  }, []);

  // Create edges geometry for the outline
  const edgesGeometry = useMemo(() => {
    return new THREE.EdgesGeometry(new RoundedBoxGeometry(0.94, 0.94, 0.94, 4, 0.05));
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Subtle breathing/pulsing effect
      const breathingScale = 1 + Math.sin(time * 1.5 + index * 0.2) * 0.015;
      meshRef.current.scale.setScalar(breathingScale);
      
      // Micro-rotation for organic feel
      const microRotation = Math.sin(time * 0.3 + index * 0.05) * 0.02;
      meshRef.current.rotation.z = microRotation;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <primitive object={roundedGeometry} />
      <meshPhysicalMaterial
        color={isDark ? "#180769" : "#050505"}
        metalness={isDark ? 0.2 : 0.15}
        roughness={isDark ? 0.05 : 0.02}
        clearcoat={1}
        clearcoatRoughness={isDark ? 0.08 : 0.05}
        reflectivity={isDark ? 0.8 : 0.95}
        transmission={0}
        thickness={0.1}
        envMapIntensity={isDark ? 1.5 : 2}
        transparent={false}
      />
      {/* Subtle edge definition */}
      <lineSegments>
        <primitive object={edgesGeometry} />
        <lineBasicMaterial 
          color={isDark ? "#0c0336" : "#111111"} 
          linewidth={0.5} 
          transparent 
          opacity={isDark ? 0.6 : 0.4} 
        />
      </lineSegments>
    </mesh>
  );
};

interface LayerRotationState {
  axis: 'x' | 'y' | 'z';
  layerIndex: number;
  targetRotation: number;
  currentRotation: number;
  isRotating: boolean;
  speed: number;
}

export const PremiumRubiksCube: React.FC = () => {
  const mainGroupRef = useRef<Group>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Create refs for each layer (9 total: 3 for X, 3 for Y, 3 for Z)
  const xLayerRefs = useRef<Array<React.RefObject<Group>>>(
    Array(3).fill(null).map(() => React.createRef<Group>())
  );
  const yLayerRefs = useRef<Array<React.RefObject<Group>>>(
    Array(3).fill(null).map(() => React.createRef<Group>())
  );
  const zLayerRefs = useRef<Array<React.RefObject<Group>>>(
    Array(3).fill(null).map(() => React.createRef<Group>())
  );
  
  const [layerRotations, setLayerRotations] = useState<LayerRotationState[]>([]);
  
  // Generate 3x3x3 cube positions
  const cubeData = useMemo(() => {
    const positions: Array<{
      position: [number, number, number];
      index: number;
      layers: { x: number; y: number; z: number };
    }> = [];
    let index = 0;
    
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          positions.push({
            position: [x * 1.02, y * 1.02, z * 1.02],
            index,
            layers: {
              x: x + 1, // 0, 1, 2 for left, middle, right
              y: y + 1, // 0, 1, 2 for bottom, middle, top
              z: z + 1  // 0, 1, 2 for back, middle, front
            }
          });
          index++;
        }
      }
    }
    return positions;
  }, []);

  // Initialize layer rotation states
  useEffect(() => {
    const initRotations: LayerRotationState[] = [];
    
    // X, Y, Z layers
    ['x', 'y', 'z'].forEach((axis, axisIndex) => {
      for (let i = 0; i < 3; i++) {
        initRotations.push({
          axis: axis as 'x' | 'y' | 'z',
          layerIndex: i,
          targetRotation: 0,
          currentRotation: 0,
          isRotating: false,
          speed: 3.5 + Math.random() * 2
        });
      }
    });
    
    setLayerRotations(initRotations);
  }, []);

  // Trigger random layer rotations continuously
  useEffect(() => {
    const triggerRotation = () => {
      setLayerRotations(prev => {
        const available = prev.filter(r => !r.isRotating);
        if (available.length === 0) return prev;
        
        const randomLayer = available[Math.floor(Math.random() * available.length)];
        const newRotations = [...prev];
        const layerIndex = newRotations.findIndex(r => 
          r.axis === randomLayer.axis && r.layerIndex === randomLayer.layerIndex
        );
        
        // Random direction: 90° (clockwise or counterclockwise)
        const direction = Math.random() > 0.5 ? 1 : -1;
        
        newRotations[layerIndex] = {
          ...randomLayer,
          isRotating: true,
          targetRotation: randomLayer.currentRotation + (Math.PI / 2) * direction
        };
        
        return newRotations;
      });
    };
    
    // Trigger rotations every 2-5 seconds for realistic solving effect
    const interval = setInterval(triggerRotation, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    // Main cube continuous diagonal rotation
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.y += delta * 0.25;
      mainGroupRef.current.rotation.x += delta * 0.15;
      
      // Subtle floating motion
      mainGroupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
    }

    // Update layer rotations
    setLayerRotations(prev => {
      return prev.map(rotation => {
        if (!rotation.isRotating) return rotation;
        
        const diff = rotation.targetRotation - rotation.currentRotation;
        const step = Math.sign(diff) * Math.min(Math.abs(diff), delta * rotation.speed);
        const newCurrent = rotation.currentRotation + step;
        
        // Apply rotation to the appropriate layer group
        let layerRef: React.RefObject<Group> | null = null;
        
        if (rotation.axis === 'x') {
          layerRef = xLayerRefs.current[rotation.layerIndex];
        } else if (rotation.axis === 'y') {
          layerRef = yLayerRefs.current[rotation.layerIndex];
        } else if (rotation.axis === 'z') {
          layerRef = zLayerRefs.current[rotation.layerIndex];
        }
        
        if (layerRef?.current) {
          if (rotation.axis === 'x') {
            layerRef.current.rotation.x = newCurrent;
          } else if (rotation.axis === 'y') {
            layerRef.current.rotation.y = newCurrent;
          } else {
            layerRef.current.rotation.z = newCurrent;
          }
        }
        
        const isComplete = Math.abs(rotation.targetRotation - newCurrent) < 0.01;
        
        return {
          ...rotation,
          currentRotation: newCurrent,
          isRotating: !isComplete
        };
      });
    });
  });

  // Function to group cubes by layer
  const getCubesForLayer = (axis: 'x' | 'y' | 'z', layerIndex: number) => {
    return cubeData.filter(cube => cube.layers[axis] === layerIndex);
  };

  return (
    <group ref={mainGroupRef}>
      {/* X layers */}
      {[0, 1, 2].map(layerIndex => (
        <group key={`x-${layerIndex}`} ref={xLayerRefs.current[layerIndex]}>
          {getCubesForLayer('x', layerIndex).map(cube => (
            <GlossyCube 
              key={`x-${layerIndex}-${cube.index}`}
              position={cube.position}
              index={cube.index}
              isDark={true}
            />
          ))}
        </group>
      ))}
      
      {/* Y layers - only middle X layer to avoid duplicates */}
      {[0, 1, 2].map(layerIndex => (
        <group key={`y-${layerIndex}`} ref={yLayerRefs.current[layerIndex]}>
          {getCubesForLayer('y', layerIndex)
            .filter(cube => cube.layers.x === 1)
            .map(cube => (
              <GlossyCube 
                key={`y-${layerIndex}-${cube.index}`}
                position={cube.position}
                index={cube.index}
                isDark={isDark}
              />
            ))}
        </group>
      ))}
      
      {/* Z layers - only center cube to avoid duplicates */}
      {[0, 1, 2].map(layerIndex => (
        <group key={`z-${layerIndex}`} ref={zLayerRefs.current[layerIndex]}>
          {getCubesForLayer('z', layerIndex)
            .filter(cube => cube.layers.x === 1 && cube.layers.y === 1)
            .map(cube => (
              <GlossyCube 
                key={`z-${layerIndex}-${cube.index}`}
                position={cube.position}
                index={cube.index}
                isDark={true}
              />
            ))}
        </group>
      ))}
    </group>
  );
};