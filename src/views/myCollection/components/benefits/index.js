import React from 'react';
import { StyleSheet } from 'react-native';

import { Card } from '../../../../components';
import { LivingRoomImage } from '../../../../assets';

const Benefits = ({ navigation }) => {
  return [0, 1].map((_, index) => (
    <Card
      key={index}
      image={LivingRoomImage}
      onPress={() => navigation.navigate('InnerCollection')}
    />
  ));
};

export default Benefits;

const styles = StyleSheet.create({});
