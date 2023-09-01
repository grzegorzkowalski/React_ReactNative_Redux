import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./components/Name";
import Surname from "./components/Surname";
import ColorBoxes from "./components/ColorBoxes";
import DateComponent from "./components/DateComponent";
import DataTimer from "./components/DataTimer";
import RandomNumber from "./components/RandomNumber";
import React from "react";

export default function App() {
  return (
      <View style={styles.container}>
          <Name name="Grzegorz" />
          <Surname name="Kowalski" />
          {/*<ColorBoxes />*/}
          <DateComponent />
          {/*<Layout />*/}
          {/*<Map />*/}
          <DataTimer />
          <RandomNumber />
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
