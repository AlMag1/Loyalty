import { StyleSheet } from 'react-native';
import { colors } from '../../variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInButton: {
    backgroundColor: colors.blue,
  },
  signIn: {
    color: colors.white,
  },
  blueItalicText: {
    color: colors.blue,
    marginRight: 16,
    fontStyle: 'italic',
  },
  textCenter: {
    textAlign: 'center',
  },
  noAccount: {
    marginTop: 20,
  },
  signUpText: {
    color: colors.greyMid,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
});
