import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import MainButton from '../components/MainButton';
export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        {' '}
        The Game is Over !
      </Text>
      <View style={styles.containerimage}>
        <Image
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.containertext}>
          The Round You Needed to Guess:{' '}
          <Text style={styles.highlight}>{props.roundGame}</Text> And Number
          User Choice: <Text style={styles.highlight}>{props.userChoice}</Text>
        </Text>
      </View>
      <View style={{width: 200}}>
        <MainButton onPress={props.onRestartGame}>NEW GAME</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerimage: {
    height: 300,
    width: 300,
    borderRadius: 200,
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  highlight: {
    fontWeight: 'bold',
    color: 'orange',
  },
  containertext: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  container: {marginHorizontal: 30, marginVertical: 15},
});
