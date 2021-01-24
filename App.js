import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Main from './src/screens/Main';

import { COLORS } from "./src/constants";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.greenTurquoise} />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
  }
});
