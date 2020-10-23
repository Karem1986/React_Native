import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    padding: 50,
    height: 30,
    borderRadius: 20, 
    width: "189%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f08a5d",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
