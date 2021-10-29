import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './variables';
import { Welcome } from './views';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
