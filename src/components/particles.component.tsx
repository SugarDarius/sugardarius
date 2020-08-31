import * as React from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';

export type Particle = {
    t: number;
    factor: number;
    speed: number;
    posFactors: {
        x: number,
        y: number;
        z: number;
    }
};

export type ParticlesProps = {
    count: number;
};

export function Particles({ count }: ParticlesProps) {
    const meshRef = React.useRef<any>();

    const sphere = React.useMemo(() => { return new THREE.Object3D(); }, []);
    const particles: Particle[] = React.useMemo(() => {
        let items: Particle[] = [];

        for (let i: number = 0; i < count; i++) {
            items.push({
                t: Math.random() * 100,
                factor: 20 + Math.random() * 100,
                speed: 0.01 + Math.random() / 200,
                posFactors: {
                    x: -50 + Math.random() * 100,
                    y: -50 + Math.random() * 100,
                    z: -50 + Math.random() * 100,
                }
                
            });
        }
        
        return items;
    }, [count]);

    useFrame(() => {
        for (let i: number = 0; i < count; i++) {
            const particle = particles[i];
            let { t, factor, speed, posFactors } = particle;

            const nt = t + (speed / 2);
            particle.t = nt;

            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            sphere.position.set(
                a + posFactors.x + Math.cos((nt / 10) * factor) + (Math.sin(nt * 1) * factor) / 10,
                b + posFactors.y + Math.sin((nt / 10) * factor) + (Math.cos(nt * 2) * factor) / 10,
                b + posFactors.z + Math.cos((nt / 10) * factor) + (Math.sin(nt * 3) * factor) / 10
            );

            sphere.scale.set(s, s, s);
            sphere.rotation.set(s * 5, s * 5, s * 5);
            sphere.updateMatrix();

            meshRef.current.setMatrixAt(i, sphere.matrix);
        }

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, count]}
        >
            <sphereBufferGeometry
                attach='geometry'
                args={[0.2, 16, 16]}
            />
            <meshPhongMaterial
                attach='material'
                color='#63B3ED'
            />
        </instancedMesh>
    );
}