import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../../variables';

const Card = ({ image }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width - 64 }]}>
      <Image source={image} style={styles.image} />
      <View style={styles.relativeContainer}>
        <View style={styles.absoluteContainer}>
          <View>
            <Text style={styles.primaryText}>10 Πόντοι για κάθε 1Ε αγορών</Text>
            <Text style={styles.secondaryText}>
              Κέρδισε πόντους και εξαργύρωσε τους!
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-forward-outline"
              size={15}
              color={colors.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 16,
    height: 190,
  },
  image: { width: '100%', height: '70%' },
  relativeContainer: {
    backgroundColor: colors.white,
    height: '30%',
    position: 'relative',
    width: '100%',
  },
  absoluteContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    position: 'absolute',
    left: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    maxWidth: '90%',
    marginBottom: 8,
  },
  primaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.greyMid,
  },
  iconContainer: {
    backgroundColor: colors.blue,
    borderRadius: 30,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
