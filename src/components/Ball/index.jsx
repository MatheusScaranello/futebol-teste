// components/Ball.js
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Ball = ({ position, setPosition, setVelocity }) => {
  const ballRef = useRef();
  const [velocity, updateVelocity] = useState([0, 0, 0]);

  useEffect(() => {
    const handleClick = (e) => {
      const direction = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
        -0.5
      ];
      updateVelocity(direction);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useFrame(() => {
    if (ballRef.current) {
      const [vx, vy, vz] = velocity;
      ballRef.current.position.x += vx * 0.1;
      ballRef.current.position.y += vy * 0.1;
      ballRef.current.position.z += vz * 0.1;

      setPosition([ballRef.current.position.x, ballRef.current.position.y, ballRef.current.position.z]);

      // Diminuir a velocidade ao longo do tempo
      updateVelocity([vx * 0.99, vy * 0.99, vz * 0.99]);
    }
  });

  return (
    <mesh
      ref={ballRef}
      position={position}
    >
      <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};

export default Ball;
