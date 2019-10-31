import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import MainQuizComponent from "./QuizComponent/MainQuizComponent";
import Unit from "./UnitComponent/Unit";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";


import AddCourse from "./ModeratorDashboard/AddCourse";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentDashboard" component={StudentDashboard} />
      <Route exact path="/MainQuizComponent" component={MainQuizComponent} />
      <Route exact path="/Unit" component={Unit} />
      <Route exact path= "/admindash" component={AdminDashboard}/>
      <Route exact path="/aboutus" component={Aboutus}/>
      <Route exact path="/contactus" component={Contactus}/>

      <Route exact path="/AddCourse" component={AddCourse} />

    </Switch>
  </main>
);

export default Main;
