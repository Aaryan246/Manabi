import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"
import './App.css'
import StudentDashboard from "./StudentDashboard"
import StudentLogin from "./StudentLogin"
import Home from "./Home"
import StudentCart from "./StudentCart"
import StudentCourses from "./StudentCourses"
import StudentCourseswithID from "./StudentCourseswithID";
import TeacherLogin from "./TeacherLogin"
import TeacherSignin from "./TeacherSignin"
import data from "../data.json";
function App(){
    const StudentCoursesID = ({match}) => {
      console.log(match.params)
      return(
          <StudentCourseswithID course={data.student[0].course.filter((course) => course.id === parseInt(match.params.mycoursesID,10))[0]}
          />
      );
    };
    return (
      <div style={{ fontFamily: 'Avenir' }}>

        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/studentDashboard" component={StudentDashboard} />
              <Route exact path="/studentDashboard/courses" component={StudentCourses} />
              <Route exact path='/studentDashboard/:mycoursesID' component={StudentCoursesID} />
              <Route exact path="/studentDashboard/cart" component={StudentCart} />
              <Route exact path="/teacherlogin" component={TeacherLogin}></Route>
              <Route path="/studentlogin" component={StudentLogin}/>
              <Route path="/teachersignin" component={TeacherSignin}/>
              <Route exact path="/" component={Home}></Route>
              {/* <Route path="/userlogin" component={UserLogin}></Route> */}
              
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    )
}


export default App
