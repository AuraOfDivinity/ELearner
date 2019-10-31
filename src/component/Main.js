import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login} />
    </Switch>
  </main>
);

export default Main;
