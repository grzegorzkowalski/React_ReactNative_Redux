import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Name from "./components/Name";
import Surname from "./components/Surname";
import ColorBoxes from "./components/ColorBoxes";
import React from "react";
import DateComponent from "./components/DateComponent"
import Layout from "./components/Layout";
import Map from "./components/Map";
import DataTimer from "./components/DataTimer";
import RandomNumber from "./components/RandomNumber";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactScreen from "./screens/ContactScreen";
import FunScreen from "./screens/FunScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Fun" component={FunScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
