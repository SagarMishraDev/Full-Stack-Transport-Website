import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

export function TruckModel({ scrollY, ...props }) {
  const group = useRef();
  const wheels = useRef([]);
  const tl = useRef();

  // Simple truck model simulation (in a real app, you'd use a proper GLTF model)
  useEffect(() => {
    // Initialize animation timeline
    tl.current = gsap.timeline({ paused: true });
    
    if (group.current) {
      // Animate truck as user scrolls
      tl.current.to(group.current.rotation, { y: Math.PI * 2, duration: 2, ease: 'power1.inOut' }, 0);
      tl.current.to(group.current.position, { x: 3, duration: 3, ease: 'power1.inOut' }, 0);
      tl.current.to(group.current.position, { x: 0, duration: 3, ease: 'power1.inOut' }, 3);
    }
  }, []);

  // Update animation based on scroll position
  useEffect(() => {
    const scrollProgress = Math.min(scrollY / 1000, 1);
    if (tl.current) {
      tl.current.progress(scrollProgress);
    }
  }, [scrollY]);

  // Animate wheels continuously
  useFrame((state, delta) => {
    if (wheels.current.length) {
      wheels.current.forEach(wheel => {
        wheel.rotation.z -= delta * 2;
      });
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Truck cabin */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <boxGeometry args={[1.2, 1, 1.5]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>
      
      {/* Truck body */}
      <mesh position={[0, 0.5, 1.5]} castShadow>
        <boxGeometry args={[1.4, 1.4, 3]} />
        <meshStandardMaterial color="#0077ee" />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0, 1.1, 0.3]} rotation={[Math.PI * 0.1, 0, 0]} castShadow>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial color="#aaddff" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Wheels - front */}
      <mesh ref={el => wheels.current[0] = el} position={[-0.7, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      <mesh ref={el => wheels.current[1] = el} position={[0.7, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Wheels - back */}
      <mesh ref={el => wheels.current[2] = el} position={[-0.7, -0.2, 1.5]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      <mesh ref={el => wheels.current[3] = el} position={[0.7, -0.2, 1.5]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Wheels - back 2 */}
      <mesh ref={el => wheels.current[4] = el} position={[-0.7, -0.2, 2.5]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      <mesh ref={el => wheels.current[5] = el} position={[0.7, -0.2, 2.5]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.5, 0.5, -0.76]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.05]} />
        <meshStandardMaterial color="#ffdd00" emissive="#ffdd00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.5, 0.5, -0.76]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.05]} />
        <meshStandardMaterial color="#ffdd00" emissive="#ffdd00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function TruckScene({ scrollY }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, -5]} />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048} 
      />
      <TruckModel scrollY={scrollY} position={[0, 0, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </>
  );
} 