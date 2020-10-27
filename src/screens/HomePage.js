import React from 'react'
import Header from "../components/Header"
import {StyleSheet, Image,
  View, Text,
TouchableOpacity} from 'react-native'
export default function HomePage(navData) {
  return (
 
    <View  style={styles.container}>
      <View>
        <Header 
        title="Welcome to KermitTech News"/>
      </View>
    
 <Image style={styles.image} source={require("../../assets/giphy.gif")} />
 <Text style={styles.descriptionText}> Are you a Tech Enthusiast? with no time 
 to keep up to date with the latest news? Then, Kermit is the perfect
 solution for you!
       </Text>
      
 <View style={styles.registerContainer}>
                    
                      <TouchableOpacity
                      onPress={()=> navData.navigation.navigate('Login')}
                      
                      >
                        <Text style={styles.registerButton}>
                          Login
                          </Text>
                      </TouchableOpacity>
                    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 35,
    backgroundColor: "#c62a88",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  descriptionText: { 
    padding: 10, 
    margin: 20,
    fontSize: 20,
  },
   image: {
     padding: 20,
     margin: 30,
     width: 230,
     height:200
   },
   registerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  registerText: {
    color: '#738289',
    fontSize: 16
  },
  registerButton: {
   color: '#150485',
   fontSize: 16,
   padding: 10,
   fontWeight: 'bold',
   backgroundColor: "#03c4a1",
   borderRadius: 10
  },

});