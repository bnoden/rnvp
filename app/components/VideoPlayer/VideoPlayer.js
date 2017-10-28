import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo';

import styles from './styles';
import { demoVideo, demoToken, shortFileName } from '../access';

const btnPlay = require('./btn-play.png');
const btnPause = require('./btn-pause.png');

export const demoSrc = 'https://' + demoVideo + demoToken;

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: 'LOADING',
      playButtonImg: btnPlay
    };
  }

  handleOnLoad = () => {
    this.setState({ mediaState: 'LOADED', playButtonImg: btnPause });
    setTimeout(() => {
      this.setState({ mediaState: 'PAUSED', playButtonImg: btnPlay });
    }, 2000);
  };

  handlePressPlay = () => {
    console.log(this.state.playButtonImg);
    if (this.state.mediaState === 'PAUSED') {
      this.vid.playAsync();
      this.setState({ mediaState: 'PLAYING', playButtonImg: btnPause });
    } else {
      this.vid.pauseAsync();
      this.setState({ mediaState: 'PAUSED', playButtonImg: btnPlay });
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
          <Image style={styles.button} source={this.state.playButtonImg} />
        </TouchableOpacity>
      </View>
    );
  }
}

const videoDisplayWidth = Dimensions.get('window').width;
const videoDisplayHeight = videoDisplayWidth * 0.67;

export default VideoPlayer;
