import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import Header from "../components/Header";

export default function RegisterPage(props) {
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
      <View style={styles.container}>
        <Image style={styles.cat} source={require("../../assets/cat.jpeg")} />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            onChangeText={(text) => setAddItem(text)}
            value={addItem}
          ></TextInput>

          <Button
            title="Register"
            onPress={addList}
            color="grey"
            accessibilityLabel="App for web developers"
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
  cat: {
    padding: 20,
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 160,
  },
  text: {
    padding: 20,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
  },
  textInput: {
    padding: 20,
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
