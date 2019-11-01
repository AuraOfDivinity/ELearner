import React, { Component } from "react";
import Main from "./component/Main";
import "./App.css";
import Nav from "./component/Nav";
import NavAdmin from "./component/NavAdmin";
import NavStudent from "./component/NavStudent";
import NavMod from "./component/NavMod";
import firebase from "firebase";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      REACT_APP_EMAILJS_USERID: "user_17Y3yksLiJyYnOXq04djD",
      REACT_APP_EMAILJS_TEMPLATEID: "template_IldEFUEB",
      REACT_APP_EMAILJS_RECEIVER: "isuruliyanage1@gmail.com",
      mode : ''
    };
  }

  loadnavbar(){
    switch(this.state.mode){
      case 'admin': return <NavAdmin />
      case 'student' : return <NavStudent />
      case 'moderator' : return <NavMod />
      default : return <Nav />
    }
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
    const uid = localStorage.getItem('uid');
    Axios.get('http://localhost:5000/api/user/'+uid).then(response => {
      this.setState({
        mode : response.data.usertype
      })
    })
  }

  render() {
    return (
      <div>
        {this.loadnavbar()}

        <Main />
      </div>
    );
  }
}

export default App;
