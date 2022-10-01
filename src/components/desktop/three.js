import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars } from '@react-three/drei';

export default function Three() {
    return(
        <div className='three-container'>
            <Canvas>
                <Stars />
            </Canvas>
        </div>
    )
}