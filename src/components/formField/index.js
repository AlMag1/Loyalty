import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../../variables';

const FormField = props => {
  const [isPasswordHidden, setHidden] = useState(true);
  const renderComponent = ({
    component,
    secure,
    description,
    descriptionStyling,
    ...rest
  }) => {
    switch (component) {
      case 'input':
        return (
          <View>
            <TextInput
              {...rest}
              value=""
              style={styles.input}
              theme={{ colors: { primary: colors.greyMid } }}
              returnKeyType="done"
              right={
                secure && (
                  <TextInput.Icon
                    name="eye"
                    onPress={() => setHidden(!isPasswordHidden)}
                  />
                )
              }
              secureTextEntry={secure && isPasswordHidden}
            />
            {description && (
              <Text style={[styles.input, descriptionStyling]}>
                {description}
              </Text>
            )}
          </View>
        );
      default:
        return (
          <View>
            <Text>field</Text>
          </View>
        );
    }
  };
  return (
    <View style={{ backgroundColor: colors.white }}>
      {renderComponent(props)}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    backgroundColor: colors.white,
    marginLeft: 16,
    marginRight: 16,
  },
});
