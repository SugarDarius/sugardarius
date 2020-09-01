import * as React from 'react';
import { useFrame } from 'react-three-fiber';
import { MeshDistortMaterial } from 'drei';

export function Volcano() {
    const meshRef = React.useRef<any>();
    let a = React.useMemo(() => 0, []);
    const s = React.useMemo(() => (2 * Math.PI) / 4, []);
    const r = React.useMemo(() => 20, []);

    useFrame(() => {
        a = a + s * 0.015;

        meshRef.current.position.x = Math.cos(a) * r;
        meshRef.current.position.y = Math.sin(a) * r;
        meshRef.current.position.z = Math.cos(a) * r;
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