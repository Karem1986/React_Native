import React from 'react'
import {Formik} from 'formik'
import Header from "../components/Header"
import {useDispatch} from 'react-redux'
import {StyleSheet, View, Text, Image, 
  TextInput,
    ScrollView, 
    KeyboardAvoidingView, 
  TouchableOpacity,
Platform} from 'react-native'

//Form validation 
import * as yup from 'yup'
import * as resourcesAction from '../Redux/actions/resourcesAction'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(5, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default function LoginPage(navData) {
  const dispatch = useDispatch()
  return (
    <KeyboardAvoidingView
       behaviour={Platform.OS === "ios" ? "padding" : "height"}
       style={{flex: 1}} >

        <ScrollView>
          <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={loginValidationSchema}
             onSubmit={(values) => {
              dispatch(resourcesAction.loginUser(values))
              .then(() => {
               //  Once user logs in --> can go to the tech news
               navData.navigation.navigate('Tech News') 
              })
              .catch(err => console.log(err))
             }}
          >
         {(props) => (
            <View style={styles.container}>
                <Header 
              title="Kermit Tech News"/>
                <View style={styles.logo}>
                    <Image style={styles.image} source={require("../../assets/cat.jpeg")} />

                </View>
                <View>
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
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                   
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
         )}

          </Formik>
        </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
 container: {
  padding: 50,
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
  width: 140,
  height: 160
},
input: {
 width: 300,
 backgroundColor: '#B6BFC4',
 borderRadius: 25,
 padding:16,
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
