import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    color: '$blueGreenLight',
    fontWeight: '600',
    fontSize: 24
  },
  button: {
    width: 48,
    height: 36
  },
  fileName: {
    color: '$yellowLight',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center'
  }
});
