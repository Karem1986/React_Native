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

const Item = ({ title: title, content: content, author: author, publishedAt:publishedAt}) => (
  <View>
    <Text style={styles.title}>{title.length > 20 ? title.slice(0,20) : title}</Text>
<Text style={styles.content}>{content}</Text>
<Text style={styles.author}> By {author}</Text>
<Text style={styles.published}> Date: {publishedAt}</Text>

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
           publishedAt={item.publishedAt.slice(0,10)}
       
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
    paddingTop: 10,
    paddingBottom: 20
  },
  author: {
    paddingTop: 17,
    fontFamily: 'monospace',
    color: "#ee6f57",
    textAlign: "right"
  

  },
  published: {
   color: "white",
    paddingBottom: 20,
    textAlign: "right"
  },
  content: {
    color: "#f6f5f5",
    fontFamily: "sans-serif",
    fontSize: 15
  }
})
