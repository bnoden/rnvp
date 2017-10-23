import React, { Component } from 'react';
import { View } from 'react-native';

import { Container } from '../components/Container';
import { VideoPlayer } from '../components/VideoPlayer';

class Home extends Component {
  render() {
    return (
      <Container>
        <VideoPlayer />
      </Container>
    );
  }
}

export default Home;
