import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../variables';

const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Καλώς ήρθες στο Πρόγραμμα Επιβράβευσης
        </Text>
      </View>
      <View style={styles.buttonsArea}>
        <Text
          style={{
            color: colors.white,
            textAlign: 'center',
            marginBottom: 16,
            marginTop: 16,
          }}
        >
          LOGO
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => console.log('Pressed')}
          >
            <Text style={styles.login}>ΣΥΝΔΕΣΗ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => console.log('Pressed')}
          >
            <Text style={styles.signUp}>ΕΓΓΡΑΦΗ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alternativeContainer}>
          <View style={styles.lines} />
          <Text style={styles.alternativeHeading}>ή</Text>
          <View style={styles.lines} />
        </View>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Text style={styles.proceedWithoutLogin}>Συνέχεια χωρίς Σύνδεση</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    color: colors.blue,
    fontWeight: '400',
    fontSize: 17,
    maxWidth: 220,
    textAlign: 'center',
  },
  buttonsArea: {
    backgroundColor: colors.blue,
    flex: 2,
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 50,
    backgroundColor: colors.white,
    width: 300,
  },
  loginButton: {
    backgroundColor: colors.white,
    marginBottom: 24,
  },
  signUpButton: {
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: colors.white,
  },
  login: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  signUp: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  alternativeContainer: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  alternativeHeading: {
    color: colors.white,
    textAlign: 'center',
  },
  lines: {
    borderTopWidth: 1,
    borderColor: colors.white,
    marginLeft: 8,
    marginRight: 8,
    width: 50,
  },
  proceedWithoutLogin: {
    color: colors.white,
    textAlign: 'center',
  },
});