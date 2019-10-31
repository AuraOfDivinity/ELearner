import React, { Component } from "react";
import Main from "./component/Main";
import "./App.css";
import Nav from "./component/Nav";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      REACT_APP_EMAILJS_USERID: "user_17Y3yksLiJyYnOXq04djD",
      REACT_APP_EMAILJS_TEMPLATEID: "template_IldEFUEB",
      REACT_APP_EMAILJS_RECEIVER: "isuruliyanage1@gmail.com"
    };
  }

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDKnnCXqILQnOllSta3T6Rtm18rarIhLZk",
      authDomain: "elearner-2a954.firebaseapp.com",
      databaseURL: "https://elearner-2a954.firebaseio.com",
      projectId: "elearner-2a954",
      storageBucket: "elearner-2a954.appspot.com",
      messagingSenderId: "146498651628",
      appId: "1:146498651628:web:e37962d14d5861e050ecc9",
      measurementId: "G-LT35NK08ZE"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  render() {
    return (
      <div>
        <Nav />

        <Main />
      </div>
    );
  }
}

export default App;
