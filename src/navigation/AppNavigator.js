import "react-native-gesture-handler";
import React from "react";

import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Our screens
import RegisterPage from "../screens/RegisterPage";
import AboutUs from "../screens/AboutUs";
import { View } from "react-native";

function AboutNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About us" component={AboutUs} />
    </Stack.Navigator>
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Register") {
              iconName = "sign-in";
              return <FontAwesome name="sign-in" size={24} color="black" />;
            } else if (route.name == "About") {
              iconName = "people";
              return <MaterialIcons name="people" size={24} color="black" />;
            }
          },
        })}
      >
        <Tab.Screen name="Register" component={RegisterPage} />
        <Tab.Screen name="About" component={AboutNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
