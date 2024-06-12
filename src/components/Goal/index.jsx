// components/Goal.js
import React from 'react';

const Goal = ({ position }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry attach="geometry" args={[4, 2, 1]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};

export default Goal;
