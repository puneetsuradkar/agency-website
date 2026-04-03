import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const NeuralLattice = () => {
  const { mouse } = useThree();
  const ref = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // High-density Monochrome Data Particles
  const pointsData = useMemo(() => {
    const p = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return p;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.04 + mouse.x * 0.05;
      ref.current.rotation.x = t * 0.02 + mouse.y * 0.05;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * -0.015;
    }
  });

  return (
    <group ref={ref}>
      {/* Drifting White Data Points */}
      <Points ref={pointsRef} positions={pointsData} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.3}
        />
      </Points>

      {/* Primary High-Precision Logic Core */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[1.8, 128, 128]} position={[3, 2, -2]}>
          <MeshDistortMaterial
            color="#ffffff"
            speed={3}
            distort={0.2}
            radius={1}
            emissive="#ffffff"
            emissiveIntensity={0.2}
            roughness={0}
            metalness={1}
            wireframe
          />
        </Sphere>
      </Float>

      {/* Structural Data Plane */}
      <gridHelper args={[60, 40, '#ffffff10', '#ffffff05']} rotation={[Math.PI / 2.5, 0, 0]} position={[0, 0, -5]} />
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      {/* Subtle Monochrome Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03),transparent_80%)]" />
      
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-20, -20, -20]} intensity={1} color="#ffffff" />
        
        <NeuralLattice />
        
        {/* Deep Field Fog */}
        <fog attach="fog" args={['#000', 10, 35]} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
