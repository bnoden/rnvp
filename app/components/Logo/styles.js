import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: logoWidth,
    height: logoWidth
  },
  text: {
    color: '$blueGreenLight',
    fontWeight: '600',
    fontSize: 18
  }
});
