// screens/Game/index.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from 'react-native';
import Player from '../../components/Player';
import Ball from '../../components/Ball';
import Goal from '../../components/Goal';
import Scoreboard from '../../components/Scoreboard';

const Game = () => {
  const [score, setScore] = useState(0);
  const [playerPosition, setPlayerPosition] = useState([0, 1, 0]);
  const [ballPosition, setBallPosition] = useState([0, 0, 0]);
  const [ballVelocity, setBallVelocity] = useState([0, 0, 0]);

  const handleScore = () => {
    setScore(score + 1);
  };

  const moveBall = () => {
    setBallPosition([
      ballPosition[0] + ballVelocity[0],
      ballPosition[1] + ballVelocity[1],
      ballPosition[2] + ballVelocity[2]
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Player position={playerPosition} setPosition={setPlayerPosition} />
        <Ball position={ballPosition} setPosition={setBallPosition} setVelocity={setBallVelocity} />
        <Goal position={[0, 0, -5]} />
      </Canvas>
      <Scoreboard score={score} />
    </View>
  );
};

export default Game;
