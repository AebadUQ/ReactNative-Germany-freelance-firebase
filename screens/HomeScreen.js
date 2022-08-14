import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

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
        Home
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
          source={require('../assets/connection.png')}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Von Menschen für Menschen</Text>
        <Text style={styles.description}>
          Willkommen! Wir freuen uns, Sie hier zu haben, bitte werfen Sie einen
          Blick auf unsere Hilfeleistungen und lassen Sie sich von uns
          bestmöglich unterstützen. Ihr Vertrauen ist unser wertvollstes Gut.
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Kontakformular")}
          style={{marginTop: 10, backgroundColor: '#0d6efd',padding:0}}>
          Erfahren Sie mehr
        </Button>
      </View>
      <View style={styles.containerTwo}>
        <Text style={styles.subtitle}>Über uns</Text>
        <Image
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
            marginTop: 20,
          }}
          source={require('../assets/meeting.png')}
          resizeMode="stretch"
        />
        <Text style={[styles.subtitleTwo, {marginTop: 20}]}>
          Wir sind die führende Beratergruppe
        </Text>
        <Text style={styles.description}>
          "Life München ist ein gemeinnütziger Verein, der im Laufe der Jahre
          viele Familien, Studenten und Schüler unterstützt hat. Es ist kein
          Klischee zu sagen, dass viele Menschen nicht wissen, wie sie selbst
          mit Problemen umgehen sollen, oder sie sogar ganz ignorieren. In
          diesem Fall helfen wir, mit Mitgliedern unterschiedlichen Alters und
          mit unterschiedlichem Hintergrund in Kontakt zu treten. Insbesondere
          kooperieren wir auch mit verschiedenen Behörden und Anlaufstellen. Den
          Erfolg anderer zu erleben, ist für uns eine große Bereicherung. Ihr
          Erfolg ist unser Erfolg.“ ~Günay Sarialioglu
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Unsere Dienstleistungen</Text>
        <Text style={[styles.description, {textAlign: 'center'}]}>
          Wir verfügen über Expertise in verschiedenen Bereichen des sozialen
          Lebens und sind daher bestrebt, die richtige Anleitung zu geben:
        </Text>
        <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("UnserTeam")}>
          <Image
            style={{
              alignSelf: 'center',
              height: 100,
              width: 100,
              borderWidth: 1,
            }}
            source={require('../assets/services/team.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Unser Team</Text>
          <Text style={styles.description}>
            Unser Team besteht aus Menschen, denen Sie vertrauen können.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("Familien")}>
        <Image
          style={{
            alignSelf: 'center',

            height: 100,
            width: 100,
            borderWidth: 1,
          }}
          source={require('../assets/services/family.png')}
          resizeMode="stretch"
        />
        <Text style={styles.cardtitle}>Familien</Text>
        <Text style={styles.description}>
        Gemeinsam schützen und bauen wir Familie auf.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("Gesundheit")}>
      <Image
        style={{
          alignSelf: 'center',

          height: 100,
          width: 100,
          borderWidth: 1,
        }}
        source={require('../assets/services/heartbeat.png')}
        resizeMode="stretch"
      />
      <Text style={styles.cardtitle}>Gesundheit</Text>
      <Text style={styles.description}>
      Gesundheit ist Reichtum und gemeinsam werden wir ihn schützen.

      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("Bildung")}>
    <Image
      style={{
        alignSelf: 'center',

        height: 100,
        width: 100,
        borderWidth: 1,
      }}
      source={require('../assets/services/teaching.png')}
      resizeMode="stretch"
    />
    <Text style={styles.cardtitle}>Bildung</Text>
    <Text style={styles.description}>
    Ein gebildeter Mensch kann seine Zukunft nach Belieben ändern.

    </Text>
  </TouchableOpacity>


  <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("Impressum")}>
    <Image
      style={{
        alignSelf: 'center',

        height: 100,
        width: 100,
        borderWidth: 1,
      }}
      source={require('../assets/services/fingerprint.png')}
      resizeMode="stretch"
    />
    <Text style={styles.cardtitle}>Impressum</Text>
    <Text style={styles.description}>
    Gemeinsam wollen wir eine nachhaltige Wirkung erzielen.


    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.subcontainer} onPress={()=>navigation.navigate("Kontakformular")}>
    <Image
      style={{
        alignSelf: 'center',

        height: 100,
        width: 100,
        borderWidth: 1,
      }}
      source={require('../assets/services/conversation.png')}
      resizeMode="stretch"
    />
    <Text style={styles.cardtitle}>Kontakt</Text>
    <Text style={styles.description}>
    Möchten Sie mehr erfahren? Kontaktieren Sie uns jetzt.

    </Text>
  </TouchableOpacity>
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
});
export default App;
