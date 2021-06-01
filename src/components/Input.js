import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.style}}
      placeholder={props.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
