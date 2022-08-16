import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Avatar,  Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Swiper from 'react-native-swiper'
// const icon = <FontAwesome5 name={'comments'} />;
const LeftContent = (props) => <Avatar.Icon {...props} icon="message-plus" />;

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
import {useNavigation} from '@react-navigation/core';

const App = () => {
    const navigation = useNavigation();

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
        Unser Team
      </Text>
    </View>
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Kontakformular")}>
      <Text style={{alignSelf:'flex-end',marginRight:10,color:'white',fontWeight:'bold',borderWidth:1,borderColor:'white',padding:10,borderRadius:12}}>Kontakt </Text>
      </TouchableOpacity>
    </View>
  </View>
      <View style={styles.container}>
        <Image
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
          }}
          source={require('../assets/services/conversation.png')}
          resizeMode="stretch"
        />
        <Text style={styles.subtitle}>Wir sind die führende Beratergruppe</Text>
        <Text style={styles.description}>
          "Life München ist ein gemeinnütziger Verein, der vielen Familien,
          Studenten oder auch Schülern schon seit mehreren Jahren eine
          Unterstützung bietet. Es ist kein Klischee zu sagen, dass viele
          Menschen nicht wissen selbst mit Problemen umzugehen, oder Sie sogar
          komplett ignorieren. In dem Fall helfen wir als Verein mit
          unterschiedlich eltrigen Mitgliedern und verschiedenen Hintergründen.
          Besonders ist, dass wir auch mit verschiedenen Behörden und
          Anlaufstellen kooperieren. Für uns ist es eine große Begeisterung den
          Erfolg anderer mit zu erleben. Euer Erfolg ist unser Erfolg.“ ~Günay
          Sarialioglu
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
          <FontAwesome5
            name={'arrow-right'}
            size={20}
            color={'#0d6efd'}
            solid
          />
          <Text style={[styles.description, {paddingLeft: 10}]}>
            Familienberatung
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <FontAwesome5
            name={'arrow-right'}
            size={20}
            color={'#0d6efd'}
            solid
          />
          <Text style={[styles.description, {paddingLeft: 10}]}>
            Bildungsberatung
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <FontAwesome5
            name={'arrow-right'}
            size={20}
            color={'#0d6efd'}
            solid
          />
          <Text style={[styles.description, {paddingLeft: 10}]}>
            Gesundheitsberatung
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <FontAwesome5
            name={'arrow-right'}
            size={20}
            color={'#0d6efd'}
            solid
          />
          <Text style={[styles.description, {paddingLeft: 10}]}>
            Persönlichkeitsentwicklung
          </Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <Text style={styles.subtitle}>Unser Vorstand</Text>

        <View style={{display: 'flex', flexDirection: 'row',backgroundColor:'white',borderRadius:12,marginTop:20,
    padding:4}}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 110,
                width: 110,
                borderWidth: 1,
              }}
              source={require('../assets/blogs/b1.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 2, paddingLeft: 20, justifyContent: 'center'}}>
            <Text style={styles.horizontalcardtitlte}>Günay Sarialioglu</Text>
            <Text style={styles.description}>
              Gepr. Betriebswirtin der HWK München Vorstandsvorsitzende
            </Text>
            <Text
            onPress={()=>navigation.navigate('Kontakformular')}
              style={[
                styles.description,
                {color: '#0d6efd', fontWeight: 'bold',marginTop:10},
              ]}>
              Jetzt Kontakt aufnehmen
            </Text>
          </View>
        </View>
      
      <View style={{display: 'flex', flexDirection: 'row',backgroundColor:'white',marginTop:20,borderRadius:12
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            alignSelf: 'center',
            height: 110,
            width: 110,
            borderWidth: 1,
          }}
          source={require('../assets/blogs/b2.png')}
          resizeMode="stretch"
        />
      </View>
      <View style={{flex: 2, paddingLeft: 20, justifyContent: 'center'}}>
        <Text style={styles.horizontalcardtitlte}>Gülcin Sarialioglu</Text>
        <Text style={styles.description}>
        Vorstandsvertreterin
        </Text>
        <Text
        onPress={()=>navigation.navigate('Kontakformular')}
          style={[
            styles.description,
            {color: '#0d6efd', fontWeight: 'bold',marginTop:10},
          ]}>
          Jetzt Kontakt aufnehmen
        </Text>
      </View>
      </View>
      </View>
      <View style={styles.teamcontainer}>
      <Card>
      <Text style={[styles.horizontalcardtitlte,{padding:15,color:'#0d6efd',}]}>TUGBA M.</Text>
        <Text style={styles.paragraph}>
        Hallo, ich bin die Tugba und Mutter von 2 Kindern. Zuvor war ich Direktorin einer Nachhilfe in Berg am 
        Laim. Dort habe ich mich mit den Problemen der Kinder und Jugendlichen befasst und habe bis heute noch 
        Kontakt zu meinen alten Schülern. Nun bin ich im Bereich Kinder- und Jugendarbeit tätig
        </Text>
      </Card>

      <Card style={{marginTop:15}}>
      <Text style={[styles.horizontalcardtitlte,{padding:15,color:'#0d6efd',}]}>SENAY B.</Text>
        <Text style={styles.paragraph}>
        Hallo ich bin die Senay, eine Alleinerziehende Mutter. Ich studiere derzeit BWL, an einer Hochschule und 
        arbeite zugleich auch als Bürokauffrau. Ich kann Sie in der Arbeitswelt unterstützen. Von Bewerbungsschreiben 
        bis zum Vorstellungsgespräch kann ich Sie couchen.“
        </Text>
      </Card>

      
      <Card style={{marginTop:15}}>
      <Text style={[styles.horizontalcardtitlte,{padding:15,color:'#0d6efd',}]}>FAHIM M..</Text>
        <Text style={styles.paragraph}>
        Hallo, Ich bin der Fahim Mohamadi und bin im jungen Alter aus Afghanistan geflohen. Getrennt von der 
        Familie und große Verantwortung zu tragen war nicht immer leicht. Aber noch schwieriger war es die Sprache 
        nicht zu können und ich meine Probleme somit nicht ansprechen konnte. Deshalb werde ich im Verein als Dolmetscher 
        tätig sein für die Sprachen Urdu, Persisch und Pashto.“
        </Text>
      </Card>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white',
  },
  containerTwo: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#f3f4f8',
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
    textAlign: 'left',
  },
  subtitleTwo: {
    fontSize: 25,
    fontWeight: 'bold',

    color: 'black',
    textAlign: 'left',
  },
  horizontalcardtitlte: {
    fontSize: 22,
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
    // fontFamily:'fantasy'
  },
  teamcontainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight:15,
    paddingBottom:15,
    color:'black'
  },
});
export default App;
