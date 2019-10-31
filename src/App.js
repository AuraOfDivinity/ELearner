import React, { Component } from "react";
import Main from "./component/Main";
import "./App.css";
import Nav from "./component/Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      REACT_APP_EMAILJS_USERID: "user_17Y3yksLiJyYnOXq04djD",
      REACT_APP_EMAILJS_TEMPLATEID: "template_IldEFUEB",
      REACT_APP_EMAILJS_RECEIVER: "isuruliyanage1@gmail.com"
    };
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
