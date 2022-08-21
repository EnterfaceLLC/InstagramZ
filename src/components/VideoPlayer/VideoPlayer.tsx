/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import React, { useState } from 'react';

//***COMPONENT IMPORTS BELOW***//
import Video from 'react-native-video';

//***THEME IMPORTS BELOW***//
import colors from '../../theme/colors';

//***ICON IMPORTS BELOW***//
import Ionicons from 'react-native-vector-icons/Ionicons';

//***INTERFACE CODE BELOW***//
interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

//***VIDEO CODE BELOW***//
const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
      />

      <Ionicons
        onPress={() => setMuted(v => !v)}
        style={styles.muteIcon}
        name={muted ? 'volume-mute' : 'volume-medium'}
        size={24}
        color='white'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteIcon: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25
  },
});

export default VideoPlayer;
