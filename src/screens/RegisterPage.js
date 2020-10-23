import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header"
import {Formik} from 'formik'
import {StyleSheet, Image,  View, Text, TextInput, ScrollView, KeyboardAvoidingView, 
  TouchableOpacity} from 'react-native'

export default function RegisterPage(navData) {

  return (

<KeyboardAvoidingView
       behaviour="padding"
       style={{flex: 1}} >

        <ScrollView>
          <Formik
            initialValues={{
              name: "",
                email: "",
                password: ""
            }}
             onSubmit={(values) => {
               console.log(values)
             }}
          >
         {(props) => (
        
            <View style={styles.container}>
              <Header 
              title="Kermit Tech News"/>
                <View style={styles.logo}>
                    <Image style={styles.image} source={require("../../assets/techieCat.jpeg")} />

                </View>
                <View>
                <TextInput
                       style={styles.input}
                       placeholder="Name"
                       placeholderTextColor="#fff"
                       onChange={props.handleChange('name')}
                       value={props.values.name}
                    />
                <TextInput
                       style={styles.input}
                       placeholder="Email"
                       placeholderTextColor="#fff"
                       keyboardType="email-address"
                       onChange={props.handleChange('email')}
                       value={props.values.email}
                    />
                       <TextInput
                       style={styles.input}
                       placeholder="Password"
                       placeholderTextColor="#fff"
                      secureTextEntry={true}
                      onChange={props.handleChange('password')}
                      value={props.values.password}
                    />
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={props.handleSubmit}
                        >
                          
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                   
                    <View style={styles.registerContainer}>
                      <Text>Have an account?</Text>
                      <TouchableOpacity
                       onPress={() => navData.navigation.navigate("Login")}
                      >
                        <Text style={styles.registerButton}>
                          Login
                          </Text>
                      </TouchableOpacity>
                    </View>

            </View>
         )}

          </Formik>
        </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40
   },
   image: {
     width: 160,
     height: 160
   },
   input: {
    width: 300,
    backgroundColor: '#B6BFC4',
    borderRadius: 25,
    padding:12,
    fontSize: 16,
    marginVertical: 10
   
   },
   button: {
     width: 300,
     backgroundColor: '#738289',
     borderRadius: 25,
     marginVertical: 10,
     paddingVertical: 13
   },
   buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color: '#ffffff',
     textAlign: 'center'
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
   }
});
