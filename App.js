import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  //1.First we grab the value the user enters with state
  const [addItem, setAddItem] = useState("");
  //2. Second, we store the values the user enters, that is an [] initialState
  const [storeItem, setStoreItem] = useState([]);

  const addList = () => {
    setStoreItem([...storeItem, addItem]);
    console.log("testing storeItem", storeItem);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Add a Kermit List.Get on track!</Text>
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
        onPress={addList}
        color="#564890"
        accessibilityLabel="App to organize your todos!"
      />
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollBar}>
        {storeItem.map((todo, key) => {
          return (
            <Text key={key} style={styles.showItems}>
              {" "}
              {todo}{" "}
            </Text>
          );
        })}
      </ScrollView>
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
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    marginTop: 10,
    borderColor: "#345678",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
  showItems: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "#f6546a",
    textAlign: "center",
  },
  scrollBar: {
    width: "auto",
  },
});
