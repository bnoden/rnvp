import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { VideoPlayer } from '../components/VideoPlayer';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_C = 'USD';
const TEMP_QUOTE_C = 'GBP';
const TEMP_BASE_P = '100';
const TEMP_QUOTE_P = '79.74';

class Home extends Component {
  handlePressBaseC = () => {
    console.log('press base');
  };
  handlePressQuoteC = () => {
    console.log('press quote');
  };

  handleTextChange = (text) => {
    console.log('change text', text);
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <VideoPlayer />
      </Container>
    );
  }
}

export default Home;
