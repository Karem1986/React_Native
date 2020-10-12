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
    fontWeight: "bold",
    padding: 35,
    borderRadius: 10,

    backgroundColor: "#f08a5d",
  },
  title: {
    color: "black",
  },
});
