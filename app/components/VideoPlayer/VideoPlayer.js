import React from 'react';
import { Image, Text, View } from 'react-native';
import { Video } from 'expo';

import styles from './styles';
import { demoVideo, demoToken, shortFileName } from '../access';

export const demoSrc = 'https://' + demoVideo + demoToken;

const VideoPlayer = () =>
  <Video
    source={{ uri: demoSrc }}
    rate={0.15}
    volume={1.0}
    muted
    resizeMode="contain"
    shouldPlay
    isLooping={false}
    style={styles.containerVideo}
  />;

export default VideoPlayer;
