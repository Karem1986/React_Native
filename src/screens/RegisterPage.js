import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header"
import {Formik} from 'formik'
import {StyleSheet, Image,
    View, Text,
     TextInput, ScrollView, 
     KeyboardAvoidingView, 
  TouchableOpacity, 
Platform} from 'react-native'

  //Form validation to register
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  name: yup
  .string()
  .required('Name is Required')
  .min(3),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
export default function RegisterPage(navData) {

  return (

<KeyboardAvoidingView
   behaviour={Platform.OS === "ios" ? "padding" : "height"}
       behaviour="padding"
       style={{flex: 1}} >
        <ScrollView>
          <Formik
            initialValues={{
              name: "",
                email: "",
                password: ""
            }}
            validationSchema={loginValidationSchema}
             onSubmit={(values) => {
               console.log(values)
               navData.navigation.navigate('Home')
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
                       onChangeText={props.handleChange('name')}
                       value={props.values.name}
                       onBlur={props.handleBlur('name')}
                    />
                        <Text style={styles.error}>{props.touched.name && props.errors.name}</Text>
                <TextInput
                       style={styles.input}
                       placeholder="Email"
                       placeholderTextColor="#fff"
                       keyboardType="email-address"
                       onChangeText={props.handleChange('email')}
                       value={props.values.email}
                       onBlur={props.handleBlur('email')}
                    />
                        <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
                       <TextInput
                       style={styles.input}
                       placeholder="Password"
                       placeholderTextColor="#fff"
                      secureTextEntry={true}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                      onBlur={props.handleBlur('password')}
                    />
                        <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>
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
    padding: 20,
    backgroundColor: "#6a2c70",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40
   },
   image: {
     margin: 20,
     width: 180,
     height: 165
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
   },
   error: {
    color: 'red'
  }
});
