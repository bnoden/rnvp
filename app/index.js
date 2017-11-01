import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $blueGreen: '#10C880',
  $blueGreenLight: '#E3FFF4',
  $yellowLight: '#FFFF87',
  $easyBlue: '#2A7FAD'
})

export default () => <Home />;
