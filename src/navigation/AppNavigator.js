import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Our screens
import RegisterPage from "../screens/RegisterPage";
import AboutUs from "../screens/AboutUs";
import Dashboard from "../screens/Dashboard";
import ExtraPage from "../screens/ExtraPage";

//Hamburger menu
const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialCommunityIcons
      name="menu"
      size={24}
      color="black"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

function RegisterNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen
        name="Homepage"
        component={RegisterPage}
        options={{ title: "Kermit App" }}
      />
    
    </Stack.Navigator>
  );
}
function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="About us" component={AboutUs} />
    </Stack.Navigator>
  );
}
function DashboardNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
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
          } else if (route.name === "Resources") {
            iconName = "cat";
            return <MaterialCommunityIcons name="cat" size={24} color="black" />;
          } else if (route.name == "Dashboard") {
            iconName = "people";
            return <MaterialIcons name="people" size={24} color="black" />;
          }
        },
      })}
    >
      <Tab.Screen name="Register" component={RegisterNavigator} />
      <Tab.Screen name="Dashboard" component={DashboardNavigator} />
      <Tab.Screen name="Resources" component={ExtraPage} />
    </Tab.Navigator>
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Register" component={TabNavigator} />
        <Drawer.Screen name="About us" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
//NEXT: Hamburger menu
