import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import data from "../data.json";
import "./App.css";
import "./StudentDashboard.css";
import Card from "react-bootstrap/Card";
// import {
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardTitle,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import Payment from "./Payment";
import Header from "./Header";
import Sidebar from "./Sidebar";

function RenderMenuItem({ course, onClick }) {
  console.log(course.image);
  return (
    <Card className="Mycourse-card">
      <Link to={`/studentDashboard/${course.id}`} className="mycourse-link">
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

const StudentDashboard = () => {
  const courses = data.student[0].course.map((course) => {
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
      <Header></Header>
      <br />
      <h2>My Courses</h2>
      <div className="content">
        <div className="mycourses">{courses}</div>
      </div>
      {/* <Payment></Payment> */}
    </div>
  );
};
export default StudentDashboard;
