import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/core';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(err => alert(err.message));
  };
  return (
    <SafeAreaView >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 60,
          backgroundColor: '#0d6efd',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Willkommen
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={handleSignOut}>
            <FontAwesome5
              name={'sign-out-alt'}
              size={20}
              color={'white'}
              solid
              style={{alignSelf: 'flex-end', paddingRight: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>


<View style={[styles.container,{height:windowHeight,marginTop:15}]}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
         
          height: 150,
        }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("HomeScreen")}
          style={{
            flex: 1,
            margin:5,
            flexDirection: 'column',
            borderRadius:12,
            backgroundColor:'white'
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                marginTop:10,
                borderWidth: 1,
                // borderRadius: 100,
              }}
              source={require('../assets/connection.png')}
              resizeMode="stretch"
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.subtitle}>Home</Text>
          </View>
        </TouchableOpacity>
        <View style={{flex: 1,}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("UnserTeam")}
        style={{
          flex: 1,
            margin:5,
            flexDirection: 'column',
            borderRadius:12,
            backgroundColor:'white'
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 80,
              width: 80,
              marginTop:10,
              borderWidth: 1,
              // borderRadius: 100,
            }}
            source={require('../assets/services/conversation.png')}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.subtitle}>Unser Team</Text>
        </View>
      </TouchableOpacity>
        
        
        
        </View>
      </View>

      <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      
       
        height: 150,
      }}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Familien")}
        style={{
          flex: 1,
            margin:5,
            flexDirection: 'column',
            borderRadius:12,
            backgroundColor:'white'
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
              marginTop:10,
              // borderRadius: 100,
            }}
            source={require('../assets/maternity.png')}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.subtitle}>Familien</Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1,}}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Gesundheit")}
      style={{
        flex: 1,
        margin:5,
        flexDirection: 'column',
        borderRadius:12,
        backgroundColor:'white'
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            alignSelf: 'center',
            height: 80,
            width: 80,
            borderWidth: 1,
            marginTop:10
            // borderRadius: 100,
          }}
          source={require('../assets/services/heartbeat.png')}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.subtitle}>Gesundheit</Text>
      </View>
    </TouchableOpacity>
      </View></View>
    

      <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        
        height: 150,
      }}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Bildung")}
        style={{
          flex: 1,
          margin:5,
          flexDirection: 'column',
          borderRadius:12,
          backgroundColor:'white'
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 80,
              width: 80,
              marginTop:10,
             
              // borderRadius: 100,
            }}
            source={require('../assets/diploma.png')}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.subtitle}>Bildung</Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1,}}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Impressum")}
      style={{
        flex: 1,
        margin:5,
        flexDirection: 'column',
        borderRadius:12,
        backgroundColor:'white'
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            alignSelf: 'center',
            height: 80,
            width: 80,
            marginTop:10,
            borderWidth: 1,
            // borderRadius: 100,
          }}
          source={require('../assets/impression.png')}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.subtitle}>Impressum</Text>
      </View>
    </TouchableOpacity>
      </View></View>
    
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#f3f4f8',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'black',
    textAlign: 'left',
  },
});
