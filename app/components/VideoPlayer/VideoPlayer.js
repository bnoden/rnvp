import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo';

import styles from './styles';
import { demoVideo, demoToken, shortFileName } from '../access';

export const demoSrc = 'https://' + demoVideo + demoToken;

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: 'LOADING',
      playButtonText: 'LOADING'
    };
  }

  handleOnLoad = () => {
    this.setState({ mediaState: 'LOADED', playButtonText: 'LOADED' });
    setTimeout(() => {
      this.setState({ mediaState: 'PAUSED', playButtonText: 'PLAY' });
    }, 2000);
  };

  handlePressPlay = () => {
    if (this.state.mediaState === 'PAUSED') {
      this.vid.playAsync();
      this.setState({ mediaState: 'PLAYING', playButtonText: 'PAUSE' });
    } else {
      this.vid.pauseAsync();
      this.setState({ mediaState: 'PAUSED', playButtonText: 'PLAY' });
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.fileName}>
          {shortFileName(demoSrc, 1)}
        </Text>
        <Video
          onLoad={this.handleOnLoad}
          ref={r => (this.vid = r)}
          shouldPlay={false}
          source={{ uri: demoSrc }}
          rate={1.0}
          volume={1.0}
          muted={false}
          style={styles.video}
        />
        <TouchableOpacity onPress={this.handlePressPlay}>
          <Text style={styles.text}>
            {this.state.playButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default VideoPlayer;
