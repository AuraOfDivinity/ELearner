import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDKnnCXqILQnOllSta3T6Rtm18rarIhLZk",
  authDomain: "elearner-2a954.firebaseapp.com",
  databaseURL: "https://elearner-2a954.firebaseio.com",
  projectId: "elearner-2a954",
  storageBucket: "elearner-2a954.appspot.com",
  messagingSenderId: "146498651628"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
