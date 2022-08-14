import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const Home = () => {
  const navigation=useNavigation()

  const handleSignOut=()=>{
    
    auth.signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(err=>alert(err.message))
  }
  return (
    <View>
      <TouchableOpacity onPress={handleSignOut}>
      <Text>{auth.currentUser?.email}</Text>
      <Text>Signout</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
      
      <Text>HomeScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("UnserTeam")}>
      
      <Text>Unser Team</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Familien")}>
      
      <Text>Familien</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Gesundheit")}>
      
      <Text>Gesundheit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Bildung")}>
      
      <Text>Bildung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Impressum")}>
      
      <Text>Impressum</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})