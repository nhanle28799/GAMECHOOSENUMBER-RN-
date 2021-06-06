import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice),
  );
  const [currentRound, setCurrentRound] = useState(0);
  let valueLow = useRef(1);
  let valueHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.gameOver(currentRound);
      console.log(currentRound);
    }
  }, [currentGuess]);
  const nextGuessNumber = text => {
    if (
      (text === 'lower' && currentGuess < props.userChoice) ||
      (text === 'higher' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Wrong!!!', 'You know? Please choose correct answer', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }

    if (text === 'lower') {
      valueHigh.current = currentGuess;
    } else {
      valueLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      valueLow.current,
      valueHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setCurrentRound(currentRound + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>User Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttoncontainer}>
        <Button title="LOWER" onPress={nextGuessNumber.bind(this, 'lower')} />
        <Button title="HIGHER" onPress={nextGuessNumber.bind(this, 'higher')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 10,
    padding: 10,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    padding: 15,
    marginTop: 20,
  },
});
