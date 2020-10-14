import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from '../components/Card';

export default function Favorites(props) {

  //Card component will be used here: 
  return (
   <Card navigation={props.navigation} />
  );
}

const styles = StyleSheet.create({});
