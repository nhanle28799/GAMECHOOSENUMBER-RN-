import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import GameOverScreen from './src/Screens/GameOverScreen';
import GameScreen from './src/Screens/GameScreen';
import StartGameScreen from './src/Screens/StartGameScreen';

export default function App() {
  const [selectNumber, setSelectNumber] = useState();
  const [roundGame, setRoundGame] = useState(0);
  const startGameHandle = userNumber => {
    setSelectNumber(userNumber);
    setRoundGame(0);
  };
  const gameOverHandle = numofround => {
    setRoundGame(numofround);
  };
  let content = <StartGameScreen onStartGame={startGameHandle} />;
  if (selectNumber && roundGame <= 0) {
    content = (
      <GameScreen userChoice={selectNumber} gameOver={gameOverHandle} />
    );
  } else if (roundGame > 0) {
    content = <GameOverScreen />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
