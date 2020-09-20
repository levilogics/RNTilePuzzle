import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Color from '../constants/colors';

const Tile = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        style={styles.button}
        title={props.content.number}
        onPress={props.onClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.tile,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  button: {
    color: Color.accent,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
});

export default Tile;
