import { StyleSheet } from 'react-native';
import { colors as appColors } from '../../variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  header: {
    textAlign: 'center',
    color: appColors.blue,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  withPaddingLeftRight: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  paragraph: {
    color: appColors.greyMid,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: appColors.white,
    marginLeft: 16,
    marginRight: 16,
  },
  blueItalicText: {
    color: appColors.blue,
    marginRight: 16,
    fontStyle: 'italic',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  checkboxLabel: {
    marginLeft: 16,
  },
  signInContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signInButton: {
    backgroundColor: appColors.blue,
  },
  signIn: {
    color: appColors.white,
  },
  noAccount: {
    marginTop: 20,
  },
  signUpText: {
    color: appColors.greyMid,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
});
