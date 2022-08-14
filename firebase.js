import firebase from 'firebase/app';
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB3MbbeCo9MWJvgC3w-waRZab9hjkhGZ2Y",
  authDomain: "lifemunchen-bfc48.firebaseapp.com",
  projectId: "lifemunchen-bfc48",
  storageBucket: "lifemunchen-bfc48.appspot.com",
  messagingSenderId: "10949301020",
  appId: "1:10949301020:web:d1771cfa7c37dfb6a7a0d9",
  measurementId: "G-6EPSG1KKFB"
};
  //initializing  firebase app 
  firebase.initializeApp(firebaseConfig)
  //we need firebase auth so 
  const auth=firebase.auth()

  // we need provider for google and facebook
  // as we will be having options to authenticate yourself with google or facebook

  // const googleAuthProvider= new firebase.auth.googleAuthProvider();
  // const facebookAuthProvide=new firebase.auth.facebookAuthProvide();

  export {auth};