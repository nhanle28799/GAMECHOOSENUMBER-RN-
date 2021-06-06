import React, {useState} from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Colors from '../../constants/color';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

export default function StartGameScreen(props) {
  const [enterValue, setEnterValue] = useState('');
  const [valueConfirm, setValueConfirm] = useState();
  const [confirm, setConfrim] = useState(false);
  const inputTextHandle = text => {
    setEnterValue(text.replace(/[^0-9]/g, ''));
  };
  const onResetHandle = () => {
    setEnterValue('');
    setConfrim(false);
  };
  const onConfirmHandle = () => {
    const chooseNumber = parseInt(enterValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Wrong', 'Please choose Number 1 to 99', [
        {text: 'Yes', style: 'destructive', onPress: onResetHandle},
      ]);
    }
    setConfrim(true);
    setValueConfirm(chooseNumber);
    setEnterValue('');
    Keyboard.dismiss();
  };
  let confirmOutPut;
  const startGameHandle = valueConfirm => {
    props.onStartGame(valueConfirm);
  };
  if (confirm) {
    confirmOutPut = (
      <Card style={styles.summaryoutput}>
        <Text>Select Number</Text>
        <NumberContainer>{valueConfirm}</NumberContainer>
        <View style={styles.buttonstart}>
          <Button
            title="Start Game"
            onPress={() => startGameHandle(valueConfirm)}
          />
        </View>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.containerinput}>
          <Text>Select a Number</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            value={enterValue}
            onChangeText={inputTextHandle}
          />
          <View style={styles.containerbutton}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.primary}
                onPress={onResetHandle}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Confirm"
                color={Colors.accent}
                onPress={onConfirmHandle}
              />
            </View>
          </View>
        </Card>
        {confirmOutPut}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: '10%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  containerinput: {
    alignItems: 'center',
  },
  containerbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '20%',
    marginTop: 10,
  },
  button: {
    width: '45%',
  },
  input: {
    width: 120,
    textAlign: 'center',
  },
  summaryoutput: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 60,
  },
  buttonstart: {
    borderRadius: 50,
  },
});
