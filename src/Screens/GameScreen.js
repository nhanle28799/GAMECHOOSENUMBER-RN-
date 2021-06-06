import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import color from '../../constants/color';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Icon from 'react-native-vector-icons/AntDesign';

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
  const initialstate = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialstate);

  const [listGuess, setListGuess] = useState([initialstate]);
  let valueLow = useRef(1);
  let valueHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.gameOver(listGuess.length);
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
      valueLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      valueLow.current,
      valueHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setListGuess(listGuess => [nextNumber, ...listGuess]);
  };
  return (
    <View style={styles.screen}>
      <Text>User Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttoncontainer}>
        <MainButton onPress={nextGuessNumber.bind(this, 'lower')}>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessNumber.bind(this, 'higher')}>
          HIGHER
        </MainButton>
      </Card>
      {listGuess.map(guess => {
        return (
          <Card key={guess}>
            <Text>{guess}</Text>
          </Card>
        );
      })}
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
    width: '80%',
    padding: 15,
    marginTop: 20,
  },
});
