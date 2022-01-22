import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import data from "../data.json";
import "./App.css";
import "./Teacher.css";
import "./StudentDashboard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import Payment from "./Payment";
import HeaderTeacher from "./HeaderTeacher";

function RenderMenuItem({ course, onClick }) {
  console.log(course);
  return (
    <Card className="Mycourse-card">
      <Link to={`/teacherDashboard/${course.id}`} className="mycourse-link">
        <Card.Img
          variant="top"
          width="100%"
          src={course.image}
          alt={course.name}
        />
        <Card.Body>
          <Card.Title className="mycourse-card-title">{course.name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
}

const TeacherDashboard = () => {
  const courses = data.teachers[1].course.map((course) => {
    console.log(course);
    return (
      <div className="courses" key={course.id}>
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
    <div className="mycourse">
      <HeaderTeacher></HeaderTeacher>
      <br />
      <div className="addcourse">
        <h2>Created Courses</h2>
        <Link to="/teacherDashboard/addcourse" className="btn-addc">
          <Button className="addcourse-btn">Add Course</Button>
        </Link>
      </div>
      <div className="content">
        {/* <Sidebar></Sidebar> */}

        <div className="mycourses">{courses}</div>
      </div>

      {/* <Payment></Payment> */}
    </div>
  );
};
export default TeacherDashboard;
