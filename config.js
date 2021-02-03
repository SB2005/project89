import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = { 
    apiKey: "AIzaSyCF4GHuNZ7d2XzQUZOPGKcXR_9XwL2wcHQ",
    authDomain: "selfmadeapp-2b965.firebaseapp.com",
    projectId: "selfmadeapp-2b965",
    storageBucket: "selfmadeapp-2b965.appspot.com",
    messagingSenderId: "885625841736",
    appId: "1:885625841736:web:0c82ab67d64fb63535d07d",
    databaseURL: "https://selfmadeapp-2b965.firebaseio.com"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  export default firebase.firestore();

   