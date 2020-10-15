import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';

import  * as resourcesAction from "../Redux/actions/resourcesAction"
const Card = props => {

  const dispatch = useDispatch()
  const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));

    return(
      <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetail')}>
      <View style={styles.card}>
          <View style={styles.imageWrapper}> 
              <Image 
                  // source={require('../../assets/news-demo.jpg')} 
                  source={{uri: props.image}}
                  style={styles.image}
              />
          </View>
          <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                  {props.title.length > 22 ? props.title.slice(0, 22) + '...' : props.title}
              </Text>
              <MaterialIcons 
                  name={isFav ? 'favorite': 'favorite-border'} 
                  color="#72bcd4" size={24} 
                  onPress={() => {
                      dispatch(resourcesAction.toggleFavorites(props.url))
                  }}
              />
          </View>
          <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>
                  {props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
              </Text>
          </View>
      </View>
  </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
      width: '100%',
      height: '60%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    description:{
        fontFamily: 'sans-serif',
        fontSize: 15,
        marginTop: 10
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    }
});

export default Card;