import "react-native-gesture-handler";
import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import RegisterPage from "./src/screens/RegisterPage";
import { Provider } from "react-redux";
import store from "./src/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
