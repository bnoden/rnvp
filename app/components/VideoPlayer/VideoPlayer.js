import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo';

import styles from './styles';
import { demoVideo, demoToken, shortFileName } from '../access';

export const demoSrc = 'https://' + demoVideo + demoToken;

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: ''
    };
  }

  handleOnPress = () => {
    _onPlaybackStatusUpdate = playbackStatus => {
      playbackStatus = this.vid.playbackStatus;
      if (this.vid.playbackStatus.isPlaying) {
        this.vid.pauseAsync();
        this.setState({
          mediaState: 'Paused'
        });
      } else {
        this.vid.playAsync();
        this.setState({
          mediaState: 'Playing'
        });
      }
    };
    console.log('this.state.mediaState: ', this.state.mediaState);
    console.log('playbackStatus', playbackStatus);
  };

  render() {
    return (
      <View>
        <Video
          ref={r => (this.vid = r)}
          shouldPlay
          source={{ uri: demoSrc }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="contain"
          style={styles.containerVideo}
        />
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text style={styles.text}>PAUSE PLAY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default VideoPlayer;
