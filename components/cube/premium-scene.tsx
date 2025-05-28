'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { PremiumRubiksCube } from './premium-rubiks-cube';

export const PremiumScene: React.FC = () => {
    return (
        <div
        className=" w-full md:w-1/2 h-[300px] md:h-[400px] ">
    
            <Canvas
                shadows
                  camera={{ position: [4.5, 4.5, 4.5], fov: 40 }} 
                
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.2} />
                    <directionalLight
                        position={[10, 10, 10]}
                        intensity={0.8}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <pointLight
                        position={[-10, -10, -10]}
                        intensity={0.3}
                        color={"#3b82f6"}
                    />
                    <pointLight
                        position={[10, -10, 10]}
                        intensity={0.3}
                        color={"#a855f7"}
                    />

                    {/* Environment lighting */}
                    <Environment preset={"night"} />

                    {/* Premium Rubik's Cube */}
                    <PremiumRubiksCube />

                    {/* Camera controls */}
                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={false}
                        minDistance={2}
                        maxDistance={20}
                    />
                </Suspense>
            </Canvas>
    </div>
    );
};
