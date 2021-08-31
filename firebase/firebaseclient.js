import Firebase from 'Firebase/app'
import 'Firebase/auth';
import 'Firebase/firestore';

const config = {
    apiKey: "AIzaSyBKa_JXOnQTolxZOHfrOT6E7alXpHtHjEA",
    authDomain: "pankh-b7850.firebaseapp.com",
    databaseURL: "https://pankh-b7850.firebaseio.com",
    projectId: "pankh-b7850",
    storageBucket: "pankh-b7850.appspot.com",
    messagingSenderId: "982761176932",
    appId: "1:982761176932:web:0b98cddc446689b5360471",
    measurementId: "G-HFLT1HFT77"
}

if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
  }
  
  export default Firebase;