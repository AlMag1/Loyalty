import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../variables';

const Logo = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 16,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        LOGO
      </Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  description: {
    color: colors.greyMid,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
  },
});
