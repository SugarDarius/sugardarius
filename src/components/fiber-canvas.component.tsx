import * as React from 'react';
import styled from '@emotion/styled';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';

import { Particles } from './particles.component';

const FiberCanvasContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export type FiberCanvasProps = {
    isDarkMode?: boolean;
};

export function FiberCanvas(props: FiberCanvasProps) {
    return (
        <FiberCanvasContainer>
            <Canvas
                camera={{ fov: 100, position: [0, 0, 30] }}
            >
                <ambientLight />
                <fog attach='fog' args={['white', 50, 190]} />
                <pointLight distance={100} intensity={4} color='white' />
                <pointLight distance={40} intensity={8} color='lightblue' />
                <Particles count={1000} />
            </Canvas>
        </FiberCanvasContainer>
    );
}