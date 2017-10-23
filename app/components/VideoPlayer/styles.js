import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoWidth = Dimensions.get('window').width;
const logoHeight = Dimensions.get('window').width*0.6;

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerVideo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: logoWidth,
    height: logoHeight,
    opacity: 1.0
  },
  text: {
    color: '$blueGreenLight',
    fontWeight: '600',
    fontSize: 18
  }
});
