import * as React from 'react';
import styled from '@emotion/styled';
import { Canvas } from 'react-three-fiber';

import { Particles } from './particles.component';
import { Volcano } from './volcano.component';

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
                camera={{ fov: 75, position: [0, 0, 70] }}
            >
                <ambientLight intensity={1.1} />
                <fog attach='fog' args={['rgba(99, 179, 237, 93)', 1, 3000]} />
                <pointLight distance={100} intensity={4} color='white' />
                <pointLight distance={40} intensity={8} color='lightblue' />
                <Particles count={1000} />
                <Volcano />
            </Canvas>
        </FiberCanvasContainer>
    );
}