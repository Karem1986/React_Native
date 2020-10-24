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
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage";
import RegisterPage from "../screens/RegisterPage";
import NewsDetail from "../screens/NewsDetail"
import AboutUs from "../screens/AboutUs";
import Favorites from "../screens/Favorites";
import News from "../screens/News";

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
    }}>
         <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
   
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: false }}
      />
            <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerLeft: null }}
      
      />
        <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{ title: "News Details" }}
      />
    
    </Stack.Navigator>
  );
}
function FavoritesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} />
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
      <Stack.Screen name="About" component={AboutUs} />
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
          } else if (route.name === "Tech News") {
            iconName = "cat";
            return <MaterialCommunityIcons name="cat" size={24} color="black" />;
          } else if (route.name == "Favorites") {
            iconName = "people";
            return <MaterialIcons name="people" size={24} color="black" />;
          }
        },
      })}
    >
   
   <Tab.Screen name="Register" component={RegisterNavigator} />
      <Tab.Screen name="Tech News" component={News} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} />
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
