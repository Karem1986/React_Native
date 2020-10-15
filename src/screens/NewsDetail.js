import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import  * as resourcesAction from '../Redux/actions/resourcesAction'
const NewsDetailsScreen =  props => {

    const dispatch = useDispatch()
    const {articleUrl} = props.route.params   
    const articleDetails = useSelector(state => state.news.articles.articles.find(article => 
        article.url === articleUrl) )

//Adding the fav icon 
const isFav = useSelector(state => state.news.favorites.some(article => 
    article.url === articleDetails.url));
    return(
        <View style={styles.container}>
          
            <View style={styles.heading}>
    <Text style={styles.title}>{articleDetails.title}</Text>
            </View>
            <View>
            <ImageBackground  source={{uri: articleDetails.urlToImage}}  style={styles.image}>
    <Text style={styles.author}>{articleDetails.author}</Text>
    <MaterialIcons 
                  name={isFav ? 'favorite': 'favorite-border'} 
                  color="#72bcd4" size={24} 
                  onPress={() => {
                      dispatch(resourcesAction.toggleFavorites(articleDetails.url))
                  }}
              />
            </ImageBackground>
            </View>
            <View style={styles.description}>
    <Text>{articleDetails.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01c5c4',
        height: 700,
        width: '100%',
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    
    },
    image: {
       
        width: '100%',
        height: 240,
        backgroundColor: '#444897',
  
    },
    title: {
        padding: 20,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: 100,
    },
    heading: {
        backgroundColor: '#01c5c4',
    },
    author: {
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    description:{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
       
    },
});

export default NewsDetailsScreen;