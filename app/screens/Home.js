import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { VideoPlayer } from '../components/VideoPlayer';
import { InputWithButton } from '../components/TextInput';

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <VideoPlayer />
        <InputWithButton />
        <InputWithButton />
      </Container>
    );
  }
}

export default Home;
