import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDQTrU-WttuqP1SMKpiy2IrjLyUDyrqHrU",
    authDomain: "story-hub-51f47.firebaseapp.com",
    databaseURL: "https://story-hub-51f47.firebaseio.com",
    projectId: "story-hub-51f47",
    storageBucket: "story-hub-51f47.appspot.com",
    messagingSenderId: "371288921474",
    appId: "1:371288921474:web:6cb1194048129206552b9b"
  };
  // Initialize Firebase
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()