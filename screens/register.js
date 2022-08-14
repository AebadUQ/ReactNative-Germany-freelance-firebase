import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React ,{useEffect, useState}from 'react';
  // import { Auth } from 'firebase/auth';
  
  import { auth } from '../firebase';
  // import { useNavigation } from '@react-navigation/native';
  import { useNavigation } from '@react-navigation/core';
  
const Register = () => {
    const navigation=useNavigation()
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [cpass,setCpass]=useState("")
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
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Vorname"
           value={fname}
            onChangeText={text=>{setFname(text)}}
          style={styles.input}
        />
        <TextInput
          placeholder="Nachname"
           value={lname}
            onChangeText={text=>{setLname(text)}}
          style={styles.input}
        />
        <TextInput
        placeholder="email"
         value={email}
          onChangeText={text=>{setEmail(text)}}
        style={styles.input}
      />
      <TextInput
          placeholder="Adresse"
           value={address}
            onChangeText={text=>{setAddress(text)}}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
           value={pass}
            onChangeText={text=>{setPass(text)}}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="password"
           value={cpass}
            onChangeText={text=>{setCpass(text)}}
          style={styles.input}
          secureTextEntry
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleSignup}
          // onPress={handleSignup}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Registers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
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
  