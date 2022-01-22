import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import data from "../data.json";
import "./App.css";
import "./StudentDashboard.css";
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import Payment from "./Payment";


function RenderMenuItem ({course, onClick}) {
  console.log(course);
  return (
      <Card>
          <Link to={`/studentDashboard/${course.id}`} >
              <CardImg width="100%" src={course.image} alt={course.name} />
              <CardImgOverlay>
                  <CardTitle>{course.name}</CardTitle>
              </CardImgOverlay>
          </Link>
      </Card>
  );
}

const StudentDashboard = () => {

  const courses = data.student[0].course.map((course) => {
    console.log(course);
        return (
        <div className="courses"  key={course.id}>
            <RenderMenuItem course={course} onClick={course.onClick} />
        </div>
        );
});

  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  console.log("user");
  console.log(user);
  console.log(data);
  const handleLogout = async () => {
    history.push("/");
  };
  console.log(data.student[0].name);
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  }, [user, history]);

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Course</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <div className="content">
        <div className="sidebar"> 
            <p className="name">hello {data.student[0].name}</p>
            <div>
            <Link className="link" to={"/studentDashboard/courses"}>Courses</Link>
            </div>
            <br/>
            <div>
              <Link className="link" to={"/studentDashboard/cart"}>Cart</Link>
            </div>
            
        </div>
        <div className="mycourses">
            {courses}
        </div>
      </div>
      
       {/* <Payment></Payment> */}
    </div>
  );
};
export default StudentDashboard;
