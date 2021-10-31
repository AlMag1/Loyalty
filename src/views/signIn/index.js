import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { Button, Logo } from '../../components';
import { styles } from './styles';

const SignIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const { colors } = useTheme();
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Logo description="Συμπλήρωσε τα παρακάτω στοιχεία για να συνδεθείς" />
      <SafeAreaView>
        <TextInput
          label="Κινητό"
          value={phoneNumber}
          onChangeText={phone => setPhoneNumber(phone)}
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="done"
          theme={{ colors: { primary: colors.greyMid } }}
        />
        <TextInput
          label="Κωδικός"
          value={password}
          onChangeText={text => setPassword(text)}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => setPasswordHidden(!isPasswordHidden)}
            />
          }
          secureTextEntry={isPasswordHidden}
          returnKeyType="done"
          style={styles.input}
          theme={{ colors: { primary: colors.greyMid } }}
        />
      </SafeAreaView>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text style={[styles.blueItalicText, styles.textRight]}>
          Ξέχασα τον κωδικό μου
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setChecked(!isChecked)}
      >
        <Ionicons
          name={isChecked ? 'checkbox' : 'square-outline'}
          size={24}
          color={colors.blue}
        />
        <Text style={styles.checkboxLabel}>Κράτησε με συνδεδεμένο</Text>
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Button
          onPress={() => console.log('Syndesi')}
          label="ΣΥΝΔΕΣΗ"
          customStyle={styles.signInButton}
          textStyle={styles.signIn}
        />
      </View>
      <TouchableOpacity onPress={() => navigate('SignUp')}>
        <Text
          style={[styles.blueItalicText, styles.textCenter, styles.noAccount]}
        >
          Δεν έχεις λογαριασμό;
        </Text>
        <Text style={[styles.textCenter, styles.signUpText]}>ΕΓΓΡΑΦΗ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
