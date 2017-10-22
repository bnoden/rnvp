import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $blueGreen: '#10C880',
  $blueGreenLight: '#E3FFF4',
  $blueGreenDark: '#016A4B',
  $greenLight: '#E3FFE6',
  $lightGray: '#B9C4C0',
  $border: '#506E6B'
})

export default () => <Home />;
