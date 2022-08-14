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
import {TextInput} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [text, setText] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [msg, setMsg] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.containerTwo}>
        <Text style={[styles.title, {fontWeight: 'bold',marginBottom:20}]}>
          Kontakhtformular
        </Text>
        <Text style={[styles.description,{fontWeight:'bold',fontSize:16,marginTop:10}]}>Name:</Text>
        <TextInput
          selectionColor="#0d6efd"
          activeOutlineColor="#0d6efd"
          outlineColor="#0d6efd"
          activeUnderlineColor="#0d6efd"
          label="Enter Name"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Text style={[styles.description,{fontWeight:'bold',fontSize:16,marginTop:10}]}>Email Addresse : </Text>
        <TextInput
          selectionColor="#0d6efd"
          activeOutlineColor="#0d6efd"
          outlineColor="#0d6efd"
          activeUnderlineColor="#0d6efd"
          label="Enter Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={[styles.description,{fontWeight:'bold',fontSize:16,marginTop:10}]}>Handynummer : </Text>
        <TextInput
          selectionColor="#0d6efd"
          activeOutlineColor="#0d6efd"
          outlineColor="#0d6efd"
          activeUnderlineColor="#0d6efd"
          label="Enter Mobile Number"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Text style={[styles.description,{fontWeight:'bold',fontSize:16,marginTop:10}]}>Wie können wir helfen:</Text>
        <TextInput
          selectionColor="#0d6efd"
          activeOutlineColor="#0d6efd"
          
          outlineColor="#0d6efd"
          activeUnderlineColor="#0d6efd"
          label="Enter Your Message"
          value={msg}
          onChangeText={text => setMsg(text)}
        />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{marginTop: 10, backgroundColor: '#0d6efd',padding:0}}>
          Send Message
        </Button>
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
         
          <View style={{flex: 2, paddingLeft: 15, justifyContent: 'center',Top:20}}>
            <Text style={styles.horizontalcardtitlte}>Addresse</Text>
            <Text style={styles.description}>Schleißheimerstr. 9 80797 München</Text>
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
