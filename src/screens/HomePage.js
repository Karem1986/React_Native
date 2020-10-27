import React from 'react'
import Header from "../components/Header"
import {StyleSheet, Image,
  View, Text,
TouchableOpacity, 
Platform} from 'react-native'
export default function HomePage(navData) {
  return (
 
    <View  style={styles.container}>
      <View>
        <Header 
        title="Welcome to KermitTech News"/>
      </View>
      <Text style={styles.descriptionText}>Labore cillum et magna mollit 
      tempor incididunt ut nisi. 
      Officia labore et commodo labore non veniam aliquip aliquip eu enim. 
      Cupidatat irure magna magna labore enim nulla. </Text>
 <Image style={styles.image} source={require("../../assets/giphy.gif")} />

      
 <View style={styles.registerContainer}>
                      <Text>Login</Text>
                      <TouchableOpacity
                      onPress={()=> navData.navigation.navigate('Login')}
                      
                      >
                        <Text style={styles.registerButton}>
                          Go to Login
                          </Text>
                      </TouchableOpacity>
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
    height: "100%"
  },
  descriptionText: {
   marginTop: 20,
   fontSize: 20,
  },
   image: {
     margin: 30,
     width: 250,
     height:230
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