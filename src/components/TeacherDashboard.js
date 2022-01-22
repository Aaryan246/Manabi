import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import data from "../data.json";
import "./App.css";
import "./StudentDashboard.css";
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Payment from "./Payment";
import HeaderTeacher from "./HeaderTeacher";

function RenderMenuItem ({course, onClick}) {
  console.log(course);
  return (
      <Card>
          <Link to={`/teacherDashboard/${course.id}`} >
              <CardImg width="100%" src={course.image} alt={course.name} />
              <CardImgOverlay>
                  <CardTitle>{course.name}</CardTitle>
              </CardImgOverlay>
          </Link>
      </Card>
  );
}

const TeacherDashboard = () => {

  const courses = data.teachers[1].course.map((course) => {
    console.log(course);
        return (
        <div className="courses"  key={course.id}>
            <RenderMenuItem course={course} onClick={course.onClick} />
        </div>
  );
});

  const history = useHistory();
  const { user } = useAuth();

  console.log(user);
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  }, [user, history]);

  return (
    <div className="chats-page">
      <HeaderTeacher></HeaderTeacher>
      <br/>
      <h2>My Courses</h2>
      <Link to="/teacherDashboard/addcourse">
        <button>Add Course</button>
      </Link>
      
      <div className="content">
        {/* <Sidebar></Sidebar> */}
        
        <div className="mycourses">
          
            {courses}
        </div>
      </div>
      
       {/* <Payment></Payment> */}
    </div>
  );
};
export default TeacherDashboard;
