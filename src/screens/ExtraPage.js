//RESOURCES PAGE TEST 
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {fetchArticles} from '../Redux/actions/resourcesAction'
import Header from "../components/Header"
export default function ExtraPage() {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchArticles)
}, [dispatch])

 const articles = useSelector(state => state.news.articles)
console.log('articles', articles)
const Item = ({ title, content, author}) => (
  <View>
    <Text style={styles.author}> - {author}</Text>
    <Text style={styles.title}>{title}</Text>
<Text style={styles.content}>{content}</Text>

  </View>
);

  return (
   
          <SafeAreaView style={styles.articlesStyle}>
            <Header 
            title="Articles"/>
              <FlatList 
          data={articles.articles} 
          keyExtractor={item => item.url}
          renderItem={({item}) => (
           <Item title={item.title}
           content={item.content}
           author={item.author}
       
            />
          )}
          />
          </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({ 
  container: {
    padding: 70,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
  },

  articlesStyle: {
    padding: 50,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    paddingBottom: 25
  },
  title: {
    fontSize: 22,
    color: "#19d3da",
    paddingBottom: 20
  },
  author: {
    paddingTop: 25,
    paddingBottom: 15,
    fontFamily: 'monospace',
    color: "#ee6f57",
  

  },
  content: {
    color: "#f6f5f5",
    fontFamily: "sans-serif",
    fontSize: 15
  }
})
