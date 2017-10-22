import React from 'react';
import Video from 'react-native-video';

import styles from './styles';

const demoVideo =
  'firebasestorage.googleapis.com/v0/b/bn-wvid.appspot.com/o/bbhd1a.mp4';
const demoToken =
  '?alt=media&token=4aa8b374-ecad-43bb-a423-d865ac55f835';
const demoSrc = 'https://' + demoVideo + demoToken;

const VideoPlayer = () =>
  <Video
    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bn-wvid.appspot.com/o/bbhd1a.mp4?alt=media&token=4aa8b374-ecad-43bb-a423-d865ac55f835' }} // Can be a URL or a local file.
    ref={ref => {
      this.player = ref;
    }} // Store reference
    rate={1.0} // 0 is paused, 1 is normal.
    volume={1.0} // 0 is muted, 1 is normal.
    muted={false} // Mutes the audio entirely.
    paused={false} // Pauses playback entirely.
    resizeMode="cover" // Fill the whole screen at aspect ratio.*
    repeat={true} // Repeat forever.
    playInBackground={false} // Audio continues to play when app entering background.
    playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown.
    ignoreSilentSwitch={'ignore'} // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
    progressUpdateInterval={250.0}
    style={styles.containerVideo}
  />;

export default VideoPlayer;
