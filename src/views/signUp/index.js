import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Logo } from '../../components';
import { styles } from './styles';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Logo description="Συμπλήρωσε τα πεδία για να ολοκληρώσεις την εγγραφή σου" />
    </View>
  );
};

export default SignUp;
