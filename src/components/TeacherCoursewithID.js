import React, { Component } from "react";
import "./Teacher.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Header from "./Header";

import VideoPlayer from "react-video-js-player";
import HeaderTeacher from "./HeaderTeacher";

function TeacherCourseswithID(props) {
  function RenderCourseInfo() {
    console.log(props);
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h1>{props.course.name}</h1>
          </CardTitle>
          <div className="courseimg">
            <CardText>{props.course.description}</CardText>
            <CardImg
              className="courseimg-img"
              width="50%"
              src={props.course.image}
              alt={props.course.name}
            />
          </div>
        </CardBody>
      </Card>
    );
  }

  const feedbacks = props.course.feedback.map((feedback) => {
    return (
      <li>
        {feedback.feedback}
        <br />
        --{feedback.author}
      </li>
    );
  });

  const lectures = props.course.lecture.map((lecture) => {
    return (
      <div>
        <details>
          <summary>
            <h3>{lecture.title}</h3>
          </summary>
          <p>{lecture.description}</p>
          <VideoPlayer src={lecture.video} width="720" height="420" />
        </details>
      </div>
    );
  });
  console.log(props);
  return (
    <div>
      <HeaderTeacher></HeaderTeacher>
      <div className="content">
        <div className="course-detail-div">
          <RenderCourseInfo></RenderCourseInfo>
          <Button className="del-add">Delete Course</Button>
          <Button className="del-add">Update Course</Button>
          <Card className="lecture-card">
            <h2> Lectures</h2>
            {lectures}
          </Card>

          <Card className="feedback-card">
            <h2>Feedback</h2>
            <ul>{feedbacks}</ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TeacherCourseswithID;
