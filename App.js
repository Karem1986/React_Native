import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState(" Happy Friday!");
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 70,
          width: 130,
          color: "turquoise",
          backgroundColor: "purple",
          padding: 20,
          margin: 30,
        }}
        onChangeText={(i) => onChangeText(i)}
        value={value}
      ></TextInput>

      <Button
        title="Start playing"
        onPress={() => console.log("a click")}
        color="#564890"
        accessibilityLabel="Learn more about cats by adopting a virtual one!"
      />
      <StatusBar style="auto" />
      <View>
        <Text color="#fff">We hope you enjoy!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
