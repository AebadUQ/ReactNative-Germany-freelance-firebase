import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
   Image,
    // TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React ,{useEffect, useState}from 'react';
  // import { Auth } from 'firebase/auth';
  import CheckBox from '@react-native-community/checkbox';
  import { auth } from '../firebase';
  // import { useNavigation } from '@react-navigation/native';
  import { useNavigation } from '@react-navigation/core';
  import {Dimensions} from 'react-native';
  import { TextInput } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
const Register = () => {
    const navigation=useNavigation()
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [cpass,setCpass]=useState("")
    const [isSelected, setSelection] = useState(false);

    useEffect(()=>{
     const unsubscribe= auth.onAuthStateChanged(user=>{
        if(user){
          navigation.replace("Home")
        }
      })
      return unsubscribe;
    },[])

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const handleSignup=()=>{
        
    if(fname && lname && address && email && pass && cpass && isSelected){
      if(pass !== cpass){
          alert("password not matched")
      }
      else{
         // alert("All field filled")
         auth.createUserWithEmailAndPassword(email,pass)
         .then(userCredential=>{
             const user=userCredential.user;
             console.log("Registered")
             console.log(email)
         })
         .catch(err=>{alert(err.message)})
      }
       
    }
    else{
        alert("fill all field")
    }
        
    }
  return (
    
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    <ScrollView>
   
    <View style={styles.container}>
   
    <View style={[styles.logobox,{alignSelf:'center'}]}>
      <Image
        style={{
          alignSelf: 'center',
          height: 100,
          width: 100,
          borderWidth: 1,
          marginBottom:20,
        //   borderColor:'red',
        }}
        source={require('../assets/logo.png')}
        resizeMode="stretch"
      />
     
    </View>
      <View style={styles.inputContainer}>
      <TextInput
      style={{marginTop:5}}
      selectionColor="#0d6efd"
      activeOutlineColor="#0d6efd"
      outlineColor="#0d6efd"
      activeUnderlineColor="#0d6efd"
      label="Vorname"
      value={fname}
            onChangeText={text=>{setFname(text)}}
    />
    <TextInput
    style={{marginTop:5}}
    selectionColor="#0d6efd"
    activeOutlineColor="#0d6efd"
    outlineColor="#0d6efd"
    activeUnderlineColor="#0d6efd"
    label="Nachname"
    value={lname}
    onChangeText={text=>{setLname(text)}}
  />
        
  <TextInput
  style={{marginTop:5}}
  selectionColor="#0d6efd"
  activeOutlineColor="#0d6efd"
  outlineColor="#0d6efd"
  activeUnderlineColor="#0d6efd"
  label="email"
  value={email}
          onChangeText={text=>{setEmail(text)}}
/>
    
<TextInput
style={{marginTop:5}}
selectionColor="#0d6efd"
activeOutlineColor="#0d6efd"
outlineColor="#0d6efd"
activeUnderlineColor="#0d6efd"
label="Adresse"
value={address}
onChangeText={text=>{setAddress(text)}}
/>
<TextInput
style={{marginTop:5}}
selectionColor="#0d6efd"
activeOutlineColor="#0d6efd"
outlineColor="#0d6efd"
activeUnderlineColor="#0d6efd"
secureTextEntry={true}
label="Passwort"
value={pass}
            onChangeText={text=>{setPass(text)}}
/>
<TextInput
style={{marginTop:5}}
selectionColor="#0d6efd"
secureTextEntry={true}
activeOutlineColor="#0d6efd"
outlineColor="#0d6efd"
activeUnderlineColor="#0d6efd"
label="Passwort wiederholen"
value={cpass}
            onChangeText={text=>{setCpass(text)}}
/>
        
       
        <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <TouchableOpacity onPress={()=>navigation.navigate("Datenschutzerklarung")}>
      <Text style={styles.label}>Datenschutzerklärung</Text>
      </TouchableOpacity>
    </View>
      </View>
      
      
      <View style={[styles.buttonContainer,{marginTop:20}]}>

      <TouchableOpacity  onPress={handleSignup}  style={styles.button}>
    
      <Text style={styles.buttonText}>Datenschutzerklärung</Text>
    
      </TouchableOpacity>
       
      </View>

      <View style={styles.buttonContainer}  >
      <TouchableOpacity
      onPress={()=>navigation.navigate("Login")}
        // onPress={handleSignup}
        style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Anmelden</Text>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    // </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    logobox: {
        display: 'flex',
        // padding: 20,
        backgroundColor: '#f3f4f8',
        // marginBottom:20,
       
        // borderRadius:'50%'
      },
    container: {
     display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
   
      height:windowHeight
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
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
     
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
    maincheckcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    checkboxContainer: {
        flexDirection: "row",
        marginTop:10,
        // marginBottom: 20,
        
      },
      checkbox: {
        alignSelf: "flex-start",
      },
      label: {
        margin: 8,
      },
  });
  