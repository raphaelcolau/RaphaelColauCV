import React, { useState, useContext } from 'react';
import { Canvas } from "@react-three/fiber";
import { Text } from '@react-three/drei';
import Font from '../../styles/assets/ModernSans-Light.otf';
import { animated, useSpring } from '@react-spring/three';
import { HoverContext } from '../context/hoverlist';

function AnimatedText(props) {
    const { elementHovered } = useContext(HoverContext);
    const text = elementHovered;
    const defaultDuration = 50000;
    const [maxY, minY] = [4, -6];

    const [position, setPosition] = useState([
        Math.random() * 8 - 4, // [-4, 4]
        Math.random() * 10 - 6, // [-6, 4]
        Math.random() * -0.5 // [-0.5, 0]
    ]);

    const speed = (maxY - (minY)) / defaultDuration;
    const remainingDuration = Math.abs((position[1] - minY) / speed);

    const animationProps = useSpring({
        from: {positionY: maxY},
        to: {positionY: minY},
        loop: true,
        config: {duration: remainingDuration},
        onRest: () => {
            setPosition([
                Math.random() * 8 - 4, // [-4, 4]
                maxY,
                Math.random() * -0.5 // [-0.5, 0]
            ]);
        }
    })

    return (
        <animated.group
            key={props.index}
            position-y={animationProps.positionY}
            onClick={() => {
                console.log('position: ', [position[0], animationProps.positionY.get(), position[2]]);
            }}
        >
            <Text
                position={position}
                color='white'
                rotation={[0, 0, -Math.PI / 2]}
                font={Font}
                fontSize={0.2}
                fontWeight='bold'
            >
                {text}
            </Text>
        </animated.group>
    );
}

export default function Three() {
    const textQuantity = 45;

    return (
        <div className='three-container'>
            <Canvas>
                {Array.from({ length: textQuantity }).map((_, i) => (
                    <AnimatedText key={i} index={i} />
                ))}
            </Canvas>
        </div>
    );
}
