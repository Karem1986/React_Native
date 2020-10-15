import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
const NewsDetailsScreen = () => {

    return(
        <View style={styles.container}>
          
            <View style={styles.heading}>
            <Text style={styles.title}>Title of article</Text>
            </View>
            <View>
            <ImageBackground style={styles.image}>
                <Text style={styles.author}></Text>
                <MaterialIcons />
            </ImageBackground>
            </View>
            <View style={styles.description}>
            <Text>Description</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    image: {
        backgroundColor: '#111000',
    },
    title: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    heading: {
        backgroundColor: '#444897',
    },
    author: {
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    description:{
        fontFamily: 'sans-serif',
        fontSize: 15,
        marginTop: 10
    },
});

export default NewsDetailsScreen;