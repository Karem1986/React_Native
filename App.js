import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import RegisterPage from "./src/screens/RegisterPage";

//NOT using AppNavigator as I dont want to render two pages at the same time.
export default function App() {
  return <AppNavigator />;
}
