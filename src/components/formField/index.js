import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Select, CheckIcon, Button } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

import { colors } from '../../variables';

const FormField = props => {
  const present = new Date();
  const [isPasswordHidden, setHidden] = useState(true);
  const [service, setService] = useState('');
  const [date, setDate] = useState(present);
  const [isVisible, setVisible] = useState(false);
  const [hasEnteredDate, setHasEnteredDate] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    // setVisible(false);
    setHasEnteredDate(true);
  };

  const parseDate = d =>
    `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  const renderComponent = ({
    component,
    secure,
    description,
    descriptionStyling,
    options,
    title,
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
      case 'select':
        return (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Select
              selectedValue={service}
              accessibilityLabel="Προσφώνηση"
              placeholder="Προσφώνηση"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="4" />,
              }}
              onValueChange={itemValue => setService(itemValue)}
              color={colors.greyMid}
              variant="unstyled"
            >
              {options.map((option, index) => (
                <Select.Item {...option} key={index} />
              ))}
            </Select>
          </View>
        );
      case 'datepicker':
        return (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Button
              variant="unstyled"
              onPress={() => setVisible(true)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.greyMid,
                justifyContent: 'flex-start',
              }}
            >
              {hasEnteredDate ? parseDate(date) : 'Επίλεξε'}
            </Button>
            {isVisible && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                maximumDate={present}
              />
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
  titleContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: colors.greyMid,
    marginBottom: 8,
  },
});
