import * as React from 'react';
import { useFrame } from 'react-three-fiber';
import { MeshDistortMaterial } from 'drei';

export function Volcano() {
    const meshRef = React.useRef<any>();
    let t = React.useMemo(() => 0, []);
    const r = React.useMemo(() => 0.2, []);
    const f = React.useMemo(() => 20 + Math.random() * 10, []);

    useFrame(() => {
        meshRef.current.position.x = meshRef.current.position.x + r * Math.cos(t);
        meshRef.current.position.y = meshRef.current.position.y + r * Math.sin(t);

        t = (t + Math.PI / 360) % (Math.PI * 2);
    });

    return (
        <mesh
            ref={meshRef}
            scale={[6, 6, 6]}
        >
            <sphereBufferGeometry 
                attach='geometry'
                args={[1, 32, 32]}
            />
            <MeshDistortMaterial
                attach='material'
                distorsion={1}
                radius={1}
                speed={8}
                color='#63B3ED'
            />
        </mesh>
    );
}