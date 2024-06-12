import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyPress } from '../../hooks/useKeyPress'; // Hook personalizado para capturar teclas pressionadas
import { useBox } from '@react-three/cannon';

// Componente para o jogador
const Player = ({ position, setPosition }) => {
  const playerRef = useRef(); // Referência para o jogador

  // Hook personalizado para capturar teclas pressionadas
  const keys = useKeyPress();

  useEffect(() => {
    const handleKeyDown = (event) => {
      let newPosition = [...position];
      switch (event.key) {
        case 'a':
        case 'A':
          newPosition[0] -= 1;
          break;
        case 'd':
        case 'D':
          newPosition[0] += 1;
          break;
        case 'w':
        case 'W':
          newPosition[2] -= 1;
          break;
        case 's':
        case 'S':
          newPosition[2] += 1;
          break;
        default:
          break;
      }
      setPosition(newPosition);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position, setPosition]);

  // Atualiza a posição do jogador a cada renderização de frame
  useFrame(() => {
    if (playerRef.current) {
      playerRef.current.position.set(position[0], position[1], position[2]);
    }
  });

  return (
    <group ref={playerRef}>
      {/* Componentes individuais do jogador */}
      <PlayerHead />
      <PlayerBody />
      <PlayerArms />
      <PlayerLegs />
    </group>
  );
};

// Componente para a cabeça do jogador
const PlayerHead = () => {
  return (
    <mesh position={[0, 2.5, 0]}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshStandardMaterial attach="material" color="peachpuff" />
    </mesh>
  );
};

// Componente para o corpo do jogador
const PlayerBody = () => {
  return (
    <>
      {/* Torso */}
      <mesh position={[0, 1.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[1, 2, 0.5]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
    </>
  );
};

// Componente para os braços do jogador
const PlayerArms = () => {
  return (
    <>
      {/* Braço esquerdo */}
      <mesh position={[-1, 1.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.5, 2, 0.5]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>

      {/* Braço direito */}
      <mesh position={[1, 1.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.5, 2, 0.5]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
    </>
  );
};

// Componente para as pernas do jogador
const PlayerLegs = () => {
  return (
    <>
      {/* Perna esquerda */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.5, 2, 0.5]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>

      {/* Perna direita */}
      <mesh position={[0.5, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.5, 2, 0.5]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
    </>
  );
};

export default Player;
