import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyD_ojQ17Y4FbtlzpEu313ig3eRVx7YbC2w",
    authDomain: "hotel-management-6a4c8.firebaseapp.com",
   databaseURL: "https://hotel-management-6a4c8.firebaseio.com",
    projectId: "hotel-management-6a4c8",
    storageBucket: "hotel-management-6a4c8.appspot.com",
    messagingSenderId: "127447413304",
    appId: "1:127447413304:web:be70eca28ca31613e22ccd"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage=firebase.storage();
  export const firebaseDb=firebase.database().ref();

  