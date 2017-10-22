import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const Logo = () =>
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.containerImage}
      source={require('./img/logo.png')}
    />
    <Text style={styles.text}>Untitled App</Text>
  </View>;

export default Logo;
