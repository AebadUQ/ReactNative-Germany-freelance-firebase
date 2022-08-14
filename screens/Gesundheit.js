import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Linking,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-paper';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <ScrollView>
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
        Gesundheit
      </Text>
    </View>
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Kontakformular")}>
      <Text style={{alignSelf:'flex-end',marginRight:10,color:'white',fontWeight:'bold',borderWidth:1,borderColor:'white',padding:10,borderRadius:12}}>Kontakt </Text>
      </TouchableOpacity>
    </View>
  </View>
      <View style={styles.containerTwo}>
        <Image
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
          }}
          source={require('../assets/services/heartbeat.png')}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Wir unterstützen Sie in bürokratischen Gesundheitsangelegenheiten, wie zum Beispiel:</Text>
    
       
      </View>
    
        

       
       

       

      <View style={styles.container}>
        <Text style={styles.subtitle}>Nützliche Links</Text>

        <View style={styles.subcontainer}>
          <Image
            style={{
              alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
            }}
            source={require('../assets/hospital.png')}
            resizeMode="stretch"
          />
          <Text style={[styles.cardtitle,{marginTop:10}]}>Antrag auf Reha und Kuren</Text>
          <Text style={styles.description}>Jeder Antrag ist individuell zu betrachten und hat gewisse Voraussetzungen zu erfüllen, diese müssen mit dem Haus/Facharzt abgestimmt werden. Kostenträger können variieren.</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.qualitaetskliniken.de/reha-haeufige-fragen/reha-antrag-stellen/',
              );
            }}>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#0d6efd',
                fontSize: 15,
                marginTop: 5,
              }}>
              Visit Now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subcontainer}>
          <Image
            style={{
                alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
            }}
            source={require('../assets/love.png')}
            resizeMode="stretch"
          />
          <Text style={[styles.cardtitle,{marginTop:10}]}>Schwerbehindertenausweis</Text>
          <Text style={styles.description}>Den Schwerbehindertenausweis beantragen Sie bei Ihrer Kommunalverwaltung oder beim Versorgungsamt. Die Adresse des zuständigen Amtes erfahren Sie beim Bürgeramt Ihrer Stadt.</Text>
         
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.familienratgeber.de/schwerbehinderung/schwerbehindertenausweis/schwerbehindertenausweis.php',
              );
            }}>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#0d6efd',
                fontSize: 15,
                marginTop: 5,
              }}>
              Visit Now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subcontainer}>
          <Image
            style={{
                alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
            }}
            source={require('../assets/support.png')}
            resizeMode="stretch"
          />
          <Text style={[styles.cardtitle,{marginTop:10}]}>Pflege-Unterstützung</Text>
          <Text style={styles.description}>Als Angehörige/r von Pflegebedürftigen haben sie gewisse Leistungsansprüche.</Text>
         
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/pflegeberatung#:~:text=Versicherte%2C%20die%20Leistungen%20der%20Pflegeversicherung%20erhalten%2C%20haben%20gegen%C3%BCber,private%20Pflege-Pflichtversicherung%20durchf%C3%BChrt%2C%20einen%20gesetzlichen%20Anspruch%20auf%20Pflegeberatung.',
              );
            }}>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#0d6efd',
                fontSize: 15,
                marginTop: 5,
              }}>
              Visit Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#f3f4f8',
  },
  containerTwo: {
    display: 'flex',
    padding: 20,
    // backgroundColor: '#f3f4f8',
  },
  subcontainer: {
    marginTop: 20,
    display: 'flex',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',

    color: 'black',
    textAlign: 'center',
  },
  subtitleTwo: {
    fontSize: 25,
    fontWeight: 'bold',

    color: 'black',
    textAlign: 'left',
  },
  cardtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  description: {
    fontSize: 15,
    color: 'black',
  },
  horizontalcardtitlte: {
    fontSize: 22,
    fontWeight: 'bold',

    color: 'black',
    textAlign: 'left',
  },
});
export default App;
