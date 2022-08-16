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
        Familien
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
          source={require('../assets/maternity.png')}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Unsere Familie bedeutet uns alles</Text>
        <Text style={styles.description}>
          „Ehe und Familie sind die natürliche und sittliche Grundlage der
          menschlichen Gemeinschaft und stehen unter dem besonderen Schutz des
          Staates. “ ~Verfassung des Freistaates Bayern
        </Text>
       
      </View>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 12,
            padding: 10,
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                borderWidth: 1,
                borderRadius: 100,
              }}
              source={require('../assets/family.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 2, paddingLeft: 15, justifyContent: 'center'}}>
            <Text style={styles.horizontalcardtitlte}>Elterngeld</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 12,
            padding: 10,
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                borderWidth: 1,
                borderRadius: 100,
              }}
              source={require('../assets/boy.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 2, paddingLeft: 15, justifyContent: 'center'}}>
            <Text style={styles.horizontalcardtitlte}>Kindergeld</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 12,
            padding: 10,
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                borderWidth: 1,
                borderRadius: 100,
              }}
              source={require('../assets/newborn.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 2, paddingLeft: 15, justifyContent: 'center'}}>
            <Text style={styles.horizontalcardtitlte}>Mutterchaftsgeld</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 12,
            padding: 10,
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                alignSelf: 'center',
                height: 80,
                width: 80,
                borderWidth: 1,
                borderRadius: 100,
              }}
              source={require('../assets/support.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 2, paddingLeft: 15, justifyContent: 'center'}}>
            <Text style={styles.horizontalcardtitlte}>Kinderzuschlag</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Nützliche Links</Text>

        <View style={styles.subcontainer}>
          <Image
            style={{
              alignSelf: 'center',
              height: 100,
              width: 100,
              borderWidth: 1,
            }}
            source={require('../assets/services/s1.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Elterngeldrechner</Text>
          <Text style={styles.description}>Sie möchten mehr Wissen?</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://familienportal.de/familienportal/meta/egr',
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
              height: 100,
              width: 100,
              borderWidth: 1,
            }}
            source={require('../assets/services/s2.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>
            Tipps und Informationen für alleinerziehende
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bmfsfj.de/bmfsfj/service/publikationen/alleinerziehend-tipps-und-informationen-73560',
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
              height: 100,
              width: 100,
              borderWidth: 1,
            }}
            source={require('../assets/services/s3.png')}
            resizeMode="stretch"
          />
          <Text style={styles.cardtitle}>Starke-Familie-Checkheft</Text>
          <Text style={styles.description}>Sie möchten mehr Wissen?</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bmfsfj.de/resource/blob/136894/a7f53ff85c8721a399ee3baab8eef055/checkheft-starke-familien-gesetz-data.pdf',
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

      <View style={styles.containerTwo}>
        <Text style={styles.title}>Unsere Familie bedeutet uns alles</Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',

            height: 130,
            marginTop: 10,
          }}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#D8D8D8',
              margin: 5,
              padding: 10,
              borderRadius: 12,
            
            }}>
            <Text style={styles.cardtitle}>Hilfe bei Frauengewalt</Text>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <FontAwesome5 name={'phone'} size={20} color={'#0d6efd'} solid />
              <Text style={{paddingLeft: 5, fontWeight: 'bold', fontSize: 15,color:'#0d6efd'}}>
                08000 116 016
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#D8D8D8',
              margin: 5,
              padding: 10,
              borderRadius: 12,
            }}>
            <Text style={styles.cardtitle}>Hilfe bei Kindesmissbrauch</Text>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <FontAwesome5 name={'phone'} size={20} color={'#0d6efd'} solid />
              <Text style={{paddingLeft: 5, fontWeight: 'bold', fontSize: 15,color:'#0d6efd'}}>
                {' '}
                0800 22 55
              </Text>
            </View>
          </View>
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
