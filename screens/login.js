import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React ,{useEffect, useState}from 'react';
// import { Auth } from 'firebase/auth';

import { auth } from '../firebase';
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
  const navigation=useNavigation()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    useEffect(()=>{
     const unsubscribe= auth.onAuthStateChanged(user=>{
        if(user){
          navigation.replace("Home")
        }
      })
      return unsubscribe;
    },[])
    const handleSignup=()=>{

        auth.createUserWithEmailAndPassword(email,pass)
        .then(userCredential=>{
            const user=userCredential.user;
            console.log("Registered")
            console.log(email)
        })
        .catch(err=>{alert(err.message)})
    }

    const handleLogin=()=>{
      auth.signInWithEmailAndPassword(email,pass)
      .then(userCredential=>{
        const user=userCredential.user;
        console.log("logged is with : ",user.email)
        navigation.navigate("Home")
    })
    .catch(err=>{alert(err.message)})
    }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.logobox}>
    <Image
      style={{
        alignSelf: 'center',
        height: 100,
        width: 100,
        borderWidth: 1,
      }}
      source={require('../assets/logo.png')}
      resizeMode="stretch"
    />
   
  </View>
      <View style={styles.inputContainer}>
     
        <TextInput
          placeholder="Benutzername"
           value={email}
            onChangeText={text=>{setEmail(text)}}
          style={styles.input}
        />
        <TextInput
          placeholder="Passwort"
           value={pass}
            onChangeText={text=>{setPass(text)}}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={[styles.buttonContainer,{marginTop:20}]}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Anmelden</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
      
        <TouchableOpacity
        onPress={()=>navigation.navigate("Register")}
          // onPress={handleSignup}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Erstelle einen Account</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logobox: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#f3f4f8',
    marginBottom:20,
    borderRadius:100
    // borderRadius:'50%'
  },
  container: {
    flex: 1,
    // marginTop:'20%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    // borderWidth:1,
    borderColor:'black'
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
  },
  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782f9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782f9',
    fontWeight: '700',
    fontSize: 16,
  },
});
