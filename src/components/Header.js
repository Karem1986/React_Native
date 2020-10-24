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
    margin: 5,
    padding: 10,
    height: 100,
    borderRadius: 10, 
    width: "225%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f08a5d"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
