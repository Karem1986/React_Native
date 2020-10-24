import React from 'react'
import Header from "../components/Header"

import {StyleSheet, Image,
  View, Text,
   TextInput, ScrollView, 
   KeyboardAvoidingView, 
TouchableOpacity, 
Platform} from 'react-native'
export default function HomePage() {
  return (
 
    <View  style={styles.container}>
      <View>
        <Header 
        title="Welcome to KermitTech News"/>
      </View>
 <Image style={styles.image} source={require("../../assets/giphy.gif")} />

      
 <View style={styles.registerContainer}>
                      <Text>Don't have an account?</Text>
                      <TouchableOpacity
                      onPress={()=> navData.navigation.navigate('Register')}
                      
                      >
                        <Text style={styles.registerButton}>
                          Register
                          </Text>
                      </TouchableOpacity>
                    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 100,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
   image: {
     margin: 120,
     width: 250,
     height:280
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
   color: '#738289',
   fontSize: 16,
   fontWeight: 'bold'
  },

});