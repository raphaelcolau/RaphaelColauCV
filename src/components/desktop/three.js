import React, { useState, useContext } from 'react';
import { Canvas } from "@react-three/fiber";
import { Text } from '@react-three/drei';
import Font from '../../styles/assets/ModernSans-Light.otf';
import { animated, useSpring } from '@react-spring/three';
import { HoverContext } from '../context/hoverlist';

function AnimatedText(props) {
    const { elementHovered } = useContext(HoverContext);
    const text = elementHovered;
    const [isHovered, setIsHovered] = useState(false);
    const defaultDuration = 50000;
    const [maxY, minY] = [4, -5.5];

    const [position, setPosition] = useState([
        Math.random() * 8 - 4, // [-4, 4]
        Math.random() * 9.5 - 5.5 , // [-5.5, 4]
        Math.random() * -0.5 // [-0.5, 0]
    ]);

    const speed = (maxY - (minY)) / defaultDuration;
    const remainingDuration = Math.abs((position[1] - minY) / speed);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

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

    const rotationProps = useSpring({
        from: { rotation: [0, 0, -Math.PI / 2] },
        to: { rotation: isHovered ? [0, 0, 0] : [0, 0, -Math.PI / 2]  },
        config: { duration: 500 },
        onChange: ({ value }) => {
            const [x, y, z] = value.rotation;
        },
    });

    if (props.index === 0 || isHovered) {
        console.log(rotationProps.rotation.get())
    }

    return (
        <animated.group
            key={props.index}
            position-y={animationProps.positionY}
            onPointerEnter={handleHover}
            onPointerLeave={handleHover}
        >
            <Text
                position={position}
                color='white'
                rotation={rotationProps.rotation.get()}
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
    const textQuantity = 50;

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
