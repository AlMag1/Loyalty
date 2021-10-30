import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../variables';

const Button = ({
  onPress,
  label = '',
  customStyle = {},
  textStyle = {},
  variant = 'filled',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'filled' ? styles.filled : styles.outlined,
        customStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === 'filled' ? styles.filledText : styles.outlinedText,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 50,
    width: 300,
  },
  filled: {
    backgroundColor: colors.white,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filledText: {
    color: colors.blue,
  },
  outlinedText: {
    color: colors.white,
  },
});

export default Button;
