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

function App(){
    return (
      <div style={{ fontFamily: 'Avenir' }}>

        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/studentDashboard" component={StudentDashboard} />
              <Route exact path="/studentDashboard/courses" component={StudentCourses} />
              <Route exact path='/studentDashboard/:mycoursesID' component={StudentCourseswithID} />
              <Route exact path="/studentDashboard/cart" component={StudentCart} />
              <Route path="/studentlogin" component={StudentLogin}/>
              <Route exact path="/" component={Home}></Route>
              {/* <Route path="/userlogin" component={UserLogin}></Route> */}
              
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    )
}


export default App
