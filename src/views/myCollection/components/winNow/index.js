import React from 'react';
import { StyleSheet } from 'react-native';

import { Card } from '../../../../components';
import { LivingRoomImage } from '../../../../assets';

const WinNow = ({ navigation }) => {
  return (
    <Card
      image={LivingRoomImage}
      onPress={() => navigation.navigate('InnerCollection')}
    />
  );
};

export default WinNow;

const styles = StyleSheet.create({});
