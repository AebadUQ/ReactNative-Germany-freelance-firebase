/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Login from './screens/login';
const Stack = createNativeStackNavigator();
import Register from './screens/register';
import HomeScreen from './screens/HomeScreen'
import UnserTeam from './screens/UnserTeam';
import Familien from './screens/Familien';
import Bildung from './screens/Bildung'
import Gesundheit from './screens/Gesundheit';
import Impressum from './screens/Impressum'
const App= () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
      <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="UnserTeam" component={UnserTeam} options={{
        title: 'Unser Team',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="Familien" component={Familien} 
      options={{
        title: 'Familien',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="Bildung" component={Bildung} options={{
        title: 'Bildung',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}} />
      <Stack.Screen name="Gesundheit" component={Gesundheit} options={{
        title: 'Gensundheit',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}/>
      <Stack.Screen name="Impressum" component={Impressum} options={{
        title: 'Impressum',
        headerStyle: {
          backgroundColor: '#0d6efd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
