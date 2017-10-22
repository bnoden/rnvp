import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
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
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_C}
          onPress={this.handlePressBaseC}
          defaultValue={TEMP_BASE_P}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_C}
          onPress={this.handlePressQuoteC}
          editable={false}
          value={TEMP_QUOTE_P}
        />
      </Container>
    );
  }
}

export default Home;
