import React from 'react'
import {Formik} from 'formik'
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, 
  TouchableOpacity} from 'react-native'

export default function LoginPage() {



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
                    <Image style={styles.image} />

                </View>
                    <TextInput
                       style={styles.input}
                       placeholder="Email"
                       placeholderTextColor="#fff"
                       keyboardType="email-address"
                    />
                       <TextInput
                       style={styles.input}
                       placeholder="Password"
                       placeholderTextColor="#fff"
                      secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

            </View>
         )}

          </Formik>
        </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
