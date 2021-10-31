import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTheme, Checkbox } from 'native-base';

import { FormField, Logo, Button } from '../../components';
import { styles } from './styles';
import fields from './fields';

const SignUp = () => {
  const { colors } = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Logo description="Συμπλήρωσε τα πεδία για να ολοκληρώσεις την εγγραφή σου" />

        {fields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}

        <Text>
          Παρέχω τη ρητή συγκατάθεση μου για προσωποποιημένη επικοινωνία μέσω
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <Checkbox value="1">SMS/VIBER</Checkbox>
          <Checkbox value="2">Email</Checkbox>
        </View>
        <Text>
          Επιθυμώ να λαμβάνω γενικό ενημερωτικό & προωθητικό υλικό μέσω:
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
          <Checkbox value="1">SMS/VIBER</Checkbox>
          <Checkbox value="2">Email</Checkbox>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            label="ΕΓΓΡΑΦΗ"
            onPress={() => console.log('Syndesi')}
            customStyle={styles.signInButton}
            textStyle={styles.signIn}
          />
        </View>
        <TouchableOpacity
          style={{ marginBottom: 50 }}
          onPress={() => navigate('SignIn')}
        >
          <Text
            style={[styles.blueItalicText, styles.textCenter, styles.noAccount]}
          >
            Δεν έχεις λογαριασμό;
          </Text>
          <Text style={[styles.textCenter, styles.signUpText]}>ΕΓΓΡΑΦΗ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
