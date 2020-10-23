import React from 'react'
import {Formik} from 'formik'
import {StyleSheet, View, Text, Image, TextInput,  ScrollView, KeyboardAvoidingView, 
  TouchableOpacity} from 'react-native'

export default function LoginPage(navData) {

  return (
    <KeyboardAvoidingView
       behaviour="padding"
       style={{flex: 1}} >

        <ScrollView>
          <Formik
            initialValues={{
                email: "",
                password: ""
            }}
             onSubmit={(values) => {
               console.log(values)
             }}
          >
         {(props) => (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.image} source={require("../../assets/cat.jpeg")} />

                </View>
                <View>
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
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ffffff'
 },
logo: {
 alignItems: 'center',
 marginBottom: 40
},
image: {
  width: 70,
  height: 70
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
}

});
