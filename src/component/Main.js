import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import MainQuizComponent from "./QuizComponent/MainQuizComponent";
import Unit from "./UnitComponent/Unit";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentDashboard" component={StudentDashboard} />
      <Route exact path="/MainQuizComponent" component={MainQuizComponent} />
      <Route exact path="/Unit" component={Unit} />
    </Switch>
  </main>
);

export default Main;
