import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Tile Puzzle" />
      <GameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
