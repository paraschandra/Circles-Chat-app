import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBjhqSnD6XJ8gZf7lbr4w1AhLNVY7lElh4",
    authDomain: "circles-644a5.firebaseapp.com",
    projectId: "circles-644a5",
    storageBucket: "circles-644a5.appspot.com",
    messagingSenderId: "11654260190",
    appId: "1:11654260190:web:2729777bc4d5a2885e694f"
  }).auth();