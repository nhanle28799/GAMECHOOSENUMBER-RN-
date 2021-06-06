import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game Over !</Text>
      <Text>Number of Round: {props.roundGame}</Text>
      <Text>Number choice:{props.userChoice}</Text>
      <Button title="New Game" onPress={props.onRestartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
