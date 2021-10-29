import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, label = '', style = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
