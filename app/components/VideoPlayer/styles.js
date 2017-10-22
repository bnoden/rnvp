import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  text: {
    color: '$blueGreenLight',
    fontWeight: '600',
    fontSize: 18
  }
});
