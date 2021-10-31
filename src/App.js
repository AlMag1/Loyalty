import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from './variables';
import { screens } from './utils';

const theme = extendTheme({
  colors,
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
          {screens.map((screen, index) => (
            <Stack.Screen key={index} {...screen} />
          ))}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
