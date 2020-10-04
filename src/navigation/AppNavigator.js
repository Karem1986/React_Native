import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Our screens
import RegisterPage from "../screens/RegisterPage";
import AboutUs from "../screens/AboutUs";
import Dashboard from "../screens/Dashboard";
import ExtraPage from "../screens/ExtraPage";
import { View } from "react-native";

function AboutNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About us" component={AboutUs} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
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
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Register" component={TabNavigator} />
        <Drawer.Screen name="Extra page" component={ExtraPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
