import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';

function AddMesh() {
    return(
        <mesh position={[0, 1.2, 0]}>
            <boxGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="white" />
        </mesh>
    )
}

export default function Three() {
    return(
        <div className='three-container' onClick={() => {
            console.log("CLick")
        }}>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={1} />
                <AddMesh />
            </Canvas>
        </div>
    )
}