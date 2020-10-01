import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//Our screens
import ListScreen from "../screens/ListScreen";
import TopScreen from "../screens/TopScreen";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kermit says..." component={ListScreen} />
        <Stack.Screen name="toHomepage" component={TopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
