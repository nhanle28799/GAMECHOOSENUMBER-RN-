import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../../constants/color';
export default function NumberContainer(props) {
  return (
    <View style={styles.containerNumber}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  containerNumber: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: color.primary,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
