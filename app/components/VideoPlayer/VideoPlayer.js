import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
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
    console.log('window width', this.vid.width);
    console.log('window height', this.vid.height);
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
          resizeMode="contain"
          onLoad={this.handleOnLoad}
          ref={r => (this.vid = r)}
          shouldPlay={false}
          source={{ uri: demoSrc }}
          rate={1.0}
          volume={1.0}
          muted={false}
          style={{
            width: videoDisplayWidth,
            height: videoDisplayHeight,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1
          }}
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

const videoDisplayWidth = Dimensions.get('window').width;
const videoDisplayHeight = videoDisplayWidth * 0.67;

export default VideoPlayer;
