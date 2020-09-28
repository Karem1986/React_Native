import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "././src/components/Header";
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
    <View>
      <Header title="Kermit APP" />

      <View style={styles.container}>
        <Image style={styles.cat} source={require("./assets/cat.jpeg")} />
        <View>
          <Text style={styles.text}>
            Get to know other developers and grow your network with Kermit
          </Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Add your skill here"
          onChangeText={(text) => setAddItem(text)}
          value={addItem}
        ></TextInput>

        <Button
          title="Submit"
          onPress={addList}
          color="green"
          accessibilityLabel="App to connect with other web developers"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cat: {
    width: 80,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
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
    padding: 25,
    marginTop: 20,
    backgroundColor: "#000000",
    textAlign: "center",
    color: "white",
  },
  scrollBar: {
    width: "auto",
  },
});
