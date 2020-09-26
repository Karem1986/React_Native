import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Image, Text, TextInput, View } from "react-native";

export default function App() {
  //1.First we grab the value the user enters with state
  const [addItem, setAddItem] = React.useState("");
  //2. Second, we store the values the user enters, that is an [] initialState

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Add your Kermit List and get on track!</Text>
      </View>
      <Image style={styles.cat} source={require("./assets/cat.jpeg")} />
      <TextInput
        style={styles.textInput}
        placeholder="Add your item"
        onChangeText={(text) => setAddItem(text)}
        value={addItem}
      ></TextInput>

      <Button
        title="Submit"
        onPress={() => console.log("a click")}
        color="#564890"
        accessibilityLabel="Learn more about cats by adopting a virtual one!"
      />
      <StatusBar style="auto" />
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
  cat: {
    width: 80,
    height: 90,
  },
  text: {
    padding: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    marginTop: 10,
    borderColor: "#345678",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
});
