import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TopScreen() {
  //Need to design homepage
  return (
    <View style={styles.container}>
      <Text>Extra page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
  },
});
