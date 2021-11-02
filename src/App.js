import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from './variables';
import { screens } from './utils';

const theme = extendTheme({
  colors,
  components: {
    Select: {
      baseStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.greyMid,
      },
    },
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route, navigation }) => {
              return {
                headerBackTitleVisible: false,
                gestureEnabled: route.name !== 'Main',
                headerTintColor: colors.blue,
                headerLeft: () => (
                  <Ionicons
                    name="chevron-back-outline"
                    color={colors.greyMid}
                    size={25}
                    onPress={() => navigation.goBack()}
                  />
                ),
              };
            }}
          >
            {screens.map((screen, index) => (
              <Stack.Screen key={index} {...screen} />
            ))}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
