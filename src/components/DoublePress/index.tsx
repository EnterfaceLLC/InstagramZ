import {Pressable} from 'react-native';
import React, {ReactNode} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePress = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handlePress = () => {
    const now = Date.now(); //Timestamp
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return(
    <Pressable onPress={handlePress}>
      {children}
      </Pressable>
  );
};

export default DoublePress;
