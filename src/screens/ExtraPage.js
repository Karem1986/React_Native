//RESOURCES PAGE TEST 
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {fetchArticles} from '../Redux/actions/resourcesAction'

export default function ExtraPage() {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchArticles)
}, [dispatch])

 const articles = useSelector(state => state.news.articles)
console.log('articles', articles)
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
