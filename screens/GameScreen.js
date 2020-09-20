import React, {useState} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import Tile from '../components/Tile';
import Color from '../constants/colors';

// TODO: To be implemented for more reusable approach.
import * as GameEngine from '../lib/GameEngine';

const GameScreen = (props) => {
  const [tile00, setTile00] = useState({number: '0', isBlank: false});
  const [tile01, setTile01] = useState({number: '1', isBlank: false});
  const [tile02, setTile02] = useState({number: '2', isBlank: false});

  const [tile10, setTile10] = useState({number: '3', isBlank: false});
  const [tile11, setTile11] = useState({number: '4', isBlank: false});
  const [tile12, setTile12] = useState({number: '5', isBlank: false});

  const [tile20, setTile20] = useState({number: '6', isBlank: false});
  const [tile21, setTile21] = useState({number: '7', isBlank: false});
  const [tile22, setTile22] = useState({number: '', isBlank: true});

  const tile00ClickHandler = () => {
    if (tile00.isBlank) {
      return;
    }
    if (tile01.isBlank) {
      setTile01({number: tile00.number, isBlank: false});
      setTile00({number: '', isBlank: true});
    } else if (tile10.isBlank) {
      setTile10({number: tile00.number, isBlank: false});
      setTile00({number: '', isBlank: true});
    }
  };
  const tile01ClickHandler = () => {
    if (tile01.isBlank) {
      return;
    }
    if (tile00.isBlank) {
      setTile00({number: tile01.number, isBlank: false});
      setTile01({number: '', isBlank: true});
    } else if (tile02.isBlank) {
      setTile02({number: tile01.number, isBlank: false});
      setTile01({number: '', isBlank: true});
    } else if (tile11.isBlank) {
      setTile11({number: tile01.number, isBlank: false});
      setTile01({number: '', isBlank: true});
    }
  };
  const tile02ClickHandler = () => {
    if (tile02.isBlank) {
      return;
    }
    if (tile01.isBlank) {
      setTile01({number: tile02.number, isBlank: false});
      setTile02({number: '', isBlank: true});
    } else if (tile12.isBlank) {
      setTile12({number: tile02.number, isBlank: false});
      setTile02({number: '', isBlank: true});
    }
  };

  const tile10ClickHandler = () => {
    if (tile10.isBlank) {
      return;
    }
    if (tile00.isBlank) {
      setTile00({number: tile10.number, isBlank: false});
      setTile10({number: '', isBlank: true});
    } else if (tile11.isBlank) {
      setTile11({number: tile10.number, isBlank: false});
      setTile10({number: '', isBlank: true});
    } else if (tile20.isBlank) {
      setTile20({number: tile10.number, isBlank: false});
      setTile10({number: '', isBlank: true});
    }
  };
  const tile11ClickHandler = () => {
    if (tile11.isBlank) {
      return;
    }
    if (tile10.isBlank) {
      setTile10({number: tile11.number, isBlank: false});
      setTile11({number: '', isBlank: true});
    } else if (tile01.isBlank) {
      setTile01({number: tile11.number, isBlank: false});
      setTile11({number: '', isBlank: true});
    } else if (tile12.isBlank) {
      setTile12({number: tile11.number, isBlank: false});
      setTile11({number: '', isBlank: true});
    } else if (tile21.isBlank) {
      setTile21({number: tile11.number, isBlank: false});
      setTile11({number: '', isBlank: true});
    }
  };
  const tile12ClickHandler = () => {
    if (tile12.isBlank) {
      return;
    }
    if (tile11.isBlank) {
      setTile11({number: tile12.number, isBlank: false});
      setTile12({number: '', isBlank: true});
    } else if (tile02.isBlank) {
      setTile02({number: tile12.number, isBlank: false});
      setTile12({number: '', isBlank: true});
    } else if (tile22.isBlank) {
      setTile22({number: tile12.number, isBlank: false});
      setTile12({number: '', isBlank: true});
    }
  };

  const tile20ClickHandler = () => {
    if (tile20.isBlank) {
      return;
    }
    if (tile10.isBlank) {
      setTile10({number: tile20.number, isBlank: false});
      setTile20({number: '', isBlank: true});
    } else if (tile21.isBlank) {
      setTile21({number: tile20.number, isBlank: false});
      setTile20({number: '', isBlank: true});
    }
  };
  const tile21ClickHandler = () => {
    if (tile21.isBlank) {
      return;
    }
    if (tile20.isBlank) {
      setTile20({number: tile21.number, isBlank: false});
      setTile21({number: '', isBlank: true});
    } else if (tile11.isBlank) {
      setTile11({number: tile21.number, isBlank: false});
      setTile21({number: '', isBlank: true});
    } else if (tile22.isBlank) {
      setTile22({number: tile21.number, isBlank: false});
      setTile21({number: '', isBlank: true});
    }
  };
  const tile22ClickHandler = () => {
    if (tile22.isBlank) {
      return;
    }
    if (tile21.isBlank) {
      setTile21({number: tile22.number, isBlank: false});
      setTile22({number: '', isBlank: true});
    } else if (tile12.isBlank) {
      setTile12({number: tile22.number, isBlank: false});
      setTile22({number: '', isBlank: true});
    }
  };

  const startGameHandler = () => {
    // TODO: Should have a random number to generate combination.
    // This is a solvable combination.
    setTile00({...tile00, number: '5'});
    setTile01({...tile01, number: '6'});
    setTile02({...tile02, number: '4'});

    setTile10({...tile10, number: '7'});
    setTile11({...tile11, number: '1'});
    setTile12({...tile12, number: '0'});

    setTile20({...tile10, number: '3'});
    setTile21({...tile11, number: '2'});
    setTile22({...tile12, number: '', isBlank: true});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Tile content={tile00} onClick={tile00ClickHandler} />
        <Tile content={tile01} onClick={tile01ClickHandler} />
        <Tile content={tile02} onClick={tile02ClickHandler} />
      </View>
      <View style={styles.row}>
        <Tile content={tile10} onClick={tile10ClickHandler} />
        <Tile content={tile11} onClick={tile11ClickHandler} />
        <Tile content={tile12} onClick={tile12ClickHandler} />
      </View>
      <View style={styles.row}>
        <Tile content={tile20} onClick={tile20ClickHandler} />
        <Tile content={tile21} onClick={tile21ClickHandler} />
        <Tile content={tile22} onClick={tile22ClickHandler} />
      </View>
      <View style={styles.bottom}>
        <Button onPress={startGameHandler} title="START GAME" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    backgroundColor: Color.secondary,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  bottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  bottom_button: {
    width: '100%',
  },
});

export default GameScreen;
