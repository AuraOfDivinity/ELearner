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
import AllCourses from "./CourseDetails/AllCourses";
import AddQuestion from "./CourseDetails/AddQuestion";
import CourseProfile from "./CourseDetails/CourseProfile";
import AddCourse from "./CourseDetails/AddCourse";
import inputform from "./inputform";
import StudentCourses from "./StudentDashboard/StudentCourses";
import StudentCourseDetails from './StudentDashboard/StudentCourseDetails';
import AddUnit from './UnitComponent/AddUnit'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/AllCourses" component={AllCourses} />
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentDashboard" component={StudentDashboard} />
      <Route exact path="/MainQuizComponent" component={MainQuizComponent} />
      <Route exact path="/Unit" component={Unit} />
      <Route exact path="/admindash" component={AdminDashboard} />
      <Route exact path="/aboutus" component={Aboutus} />
      <Route exact path="/contactus" component={Contactus} />
      <Route exact path="/inputform" component={inputform} />
      <Route exact path="/AddCourse" component={AddCourse} />
      <Route exact path="/AddUnit/:courseid" component={AddUnit} />
      <Route exact path="/AddQuestion/:courseid/:unitid" component={AddQuestion} />
      <Route exact path="/CourseProfile/:id" component={CourseProfile} />
      <Route exact path="/StudentCourses" component={StudentCourses} />
      <Route exact path="/StudentCourseDetails" component={StudentCourseDetails} />
      <Route exact path="/CourseProfile" component={CourseProfile} />
    </Switch>
  </main>
);

export default Main;
