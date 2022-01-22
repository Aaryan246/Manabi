import React, { Component, useState } from "react";
import data from "../data.json";
import Button from "react-bootstrap/Button";
import "./StudentCourse.css";
import Header from "./Header";
import "./StudentCourse.css"
import Header from './Header';

function RenderCourse({ course, onClick }) {
  console.log(course.lecture.length);
  return (
    <Card className="course-card">
      <Card.Img
        variant="top"
        src={course.image}
        alt={course.name}
        width={"100px"}
        height={"300px"}
      />
      <Card.Body>
        <Card.Title>
          <h3>{course.name}</h3>
        </Card.Title>
        <Card.Text>
          <h5>{course.author}</h5>
          <h6>{course.lecture.length} lecture</h6>
          <h6>{course.lecture.length} lecture   Rs. {course.price}</h6>
        </Card.Text>
        <Button variant="primary">Buy Course</Button>
      </Card.Body>
    </Card>
  );
}

function StudentCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const courses = data.courses
    .filter((val) => {
      console.log(val.name);
      console.log(searchTerm);
      if (searchTerm == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((course) => {
      console.log(course);
      return (
        <div className="courses" key={course.id}>
          <RenderCourse course={course} onClick={course.onClick} />
        </div>
      );
    });
  return (
    <div className="course-bg">
      <Header></Header>
      <div className="container">
        <div className="heading-course">
          <h1 className="course-header">Courses</h1>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="courses-all">{courses}</div>
      </div>
    </div>
  );
}
export default StudentCourses;
