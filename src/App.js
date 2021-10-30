import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, SignIn, SignUp } from './views';
import { colors } from './variables';

const theme = {
  ...DefaultTheme,
  customThemeColors: colors,
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Σύνδεση' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Εγγραφή' }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}

registerRootComponent(App);
