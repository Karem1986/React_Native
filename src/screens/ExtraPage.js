//All Articles list page
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar} from "react-native";
import {useDispatch, useSelector} from "react-redux"
import {fetchArticles} from '../Redux/actions/resourcesAction'
import Header from "../components/Header"
import Card from "../components/Card"

export default function ExtraPage(props) {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchArticles)
}, [dispatch])

 const articles = useSelector(state => state.news.articles)
  console.log('articles', articles)
 

  return (
   
          <SafeAreaView style={styles.articlesStyle}>
            <Header 
            title="Articles"/>
              <FlatList 
          data={articles.articles} 
          keyExtractor={item => item.url}
          renderItem={({item}) => (
            <Card 
            navigation={props.navigation} 
            title={item.title}
            image={item.urlToImage}
            description={item.description}
            url={item.url}
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
