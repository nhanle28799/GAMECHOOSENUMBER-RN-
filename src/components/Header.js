import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'hotpink',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
