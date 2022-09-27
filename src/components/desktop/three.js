import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

function AddMesh() {
    return(
        <mesh>
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
                <AddMesh />
            </Canvas>
        </div>
    )
}