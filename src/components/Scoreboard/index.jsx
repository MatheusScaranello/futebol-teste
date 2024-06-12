// components/Scoreboard.js
import React from 'react';
import { Text, View } from 'react-native';

const Scoreboard = ({ score }) => {
  return (
    <View style={{ position: 'absolute', top: 50, left: 50 }}>
      <Text style={{ fontSize: 30, color: 'black' }}>
        Score: {score}
      </Text>
    </View>
  );
};

export default Scoreboard;
