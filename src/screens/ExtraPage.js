//RESOURCES PAGE TEST 
import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {fetchArticles} from '../Redux/actions/resourcesAction'

export default function ExtraPage() {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchArticles)
}, [dispatch])

 const articles = useSelector(state => state.news.articles)
console.log('articles', articles)
const Item = ({ title, author, content, description }) => (
  <View>
    <Text >{title, author, content, description}</Text>
  </View>
);
const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}
    author={item.author}
    content={item.content}
    description={item.description}
     />
  );
}
  return (
   
    <View style={styles.container}>
      <Text>Extra page</Text>
      <View>
       <FlatList 
       data={articles.articles} 
       keyExtractor={item => item.url}
       renderItem={({item}) => (
        <Item title={item.title}
        author={item.author}
        content={item.content}
        description={item.description}
         />
       )}
       />
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
})
