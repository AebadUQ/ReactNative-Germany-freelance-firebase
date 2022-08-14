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
      <View style={styles.containerTwo}>
        <Image
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderWidth: 1,
          }}
          source={require('../assets/diploma.png')}
          resizeMode="stretch"
        />
        <Text style={styles.title}>
          Unser Ziel ist es, eine perfekte Beratung im Bildungsbereich zu bieten
        </Text>
        <Text style={styles.description}>
          „In der heutigen Zeit ist es wichtig ein gutes Fundament zu haben.
          Verschiedene Lebenslagen erschweren uns manchmal unsere Entscheidungen
          jedoch gibt es in Bayern eine Vielzahl an Möglichkeiten sich Aus- oder
          Weiterzubilden. Wir legen ein besonderes Augenmerk auf
          alleinerziehende oder schon verheiratete Personen, die noch berufliche
          Ziele verwirklichen möchten."
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Ausbildung</Text>

        <View style={styles.subcontainer}>
          <Image
            style={{
              alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
              marginBottom: 10,
            }}
            source={require('../assets/training.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Training macht einen perfekt</Text>
          <Text style={styles.description}>
            Als Azubi und Azubinen haben Sie Rechte und Pflichten, von denen Sie
            Gebrauch machen können.
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.azubiyo.de/azubi-wissen/azubi-rechte/',
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

      <View style={styles.container}>
        <Text style={styles.subtitle}>Studium</Text>
        <Text style={[styles.description, {textAlign: 'center'}]}>
          Als Student, können Sie unter bestimmten Voraussetzungen, Förderungen
          beziehen
        </Text>

        <View style={styles.subcontainer}>
          <Image
            style={{
                alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
              marginBottom: 10,
            }}
            source={require('../assets/salary.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Stipendiencheck</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.mystipendium.de/');
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
              marginBottom: 10,
            }}
            source={require('../assets/resume.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Online Antrag Bafög:</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.xn--bafg-7qa.de/de/elektronische-antragstellung-587.php',
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
              marginBottom: 10,
            }}
            source={require('../assets/test.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>
            Was passt zu mir? Studium oder Ausbildung?
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.schuelerpilot.de/orientierungstest/',
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

      <View style={styles.container}>
        <Text style={styles.subtitle}>Ausbildung</Text>
        <Text style={[styles.description, {textAlign: 'center'}]}>
          Um auf dem Arbeitsmarkt zu punkten sind ansprechende
          Bewerbungsdokumente essenziell. Vom Vorstellungsgespräch bis zum
          Aufstieg in der Arbeitsstelle, liegt es in Ihrer Hand, Ihre Zukunft zu
          beeinflussen.
        </Text>

        <View style={styles.subcontainer}>
          <Image
            style={{
                alignSelf: 'center',
              height: 80,
              width: 80,
              borderWidth: 1,
              marginBottom: 10,
            }}
            source={require('../assets/training.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Jobbörse für die Arbeitssuche</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.arbeitsagentur.de/jobsuche/');
            }}>
            <Text
              style={{
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#0d6efd',
                fontSize: 15,
                marginTop: 5,
              }}>
              klicke hier
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
