import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Card(props) {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
