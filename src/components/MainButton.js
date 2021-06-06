import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../constants/color';

export default function MainButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.title}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: color.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
