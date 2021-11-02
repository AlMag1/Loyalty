import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '../../components';
import { colors } from '../../variables';

const Welcome = ({ navigation }) => {
  const { navigate } = navigation;
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
          <Button
            label="ΣΥΝΔΕΣΗ"
            onPress={() => navigate('SignIn')}
            customStyle={styles.loginButton}
          />
          <Button
            label="ΕΓΓΡΑΦΗ"
            onPress={() => navigate('SignUp')}
            variant="outlined"
          />
        </View>
        <View style={styles.alternativeContainer}>
          <View style={styles.lines} />
          <Text style={styles.alternativeHeading}>ή</Text>
          <View style={styles.lines} />
        </View>
        <TouchableOpacity onPress={() => navigate('Main')}>
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
    backgroundColor: colors.white,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    color: colors.blue,
    // fontWeight: 'normal',
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
    marginBottom: 24,
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
