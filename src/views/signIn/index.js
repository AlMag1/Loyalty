import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../variables';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Σύνδεση</Text>
      </View>
      <Text style={{ marginTop: 16, marginBottom: 16, textAlign: 'center' }}>
        LOGO
      </Text>
      <View style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Text style={styles.paragraph}>
          Συμπλήρωσε τα παρακάτω στοιχεία για να συνδεθείς
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  headerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.greyLight,
  },
  header: {
    textAlign: 'center',
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  paragraph: {
    color: colors.greyMid,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
  },
});
