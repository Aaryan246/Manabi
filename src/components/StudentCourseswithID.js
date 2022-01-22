import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import img from "../assets/Manabi.png";
import VideoPlayer from "react-video-js-player";

function StudentCourseswithID(props) {
  // function lectures(){
  //     const
  // }
  function RenderCourseInfo() {
    console.log(props.course);
    return (
      <Card className="course-card-1">
        <Card.Body>
          <Card.Title>
            <h1>{props.course.name}</h1>
          </Card.Title>
          <div className="courseimg">
            <Card.Text>{props.course.description}</Card.Text>
            <Card.Img
              className="courseimg-img"
              width="50%"
              src={props.course.image}
              alt={props.course.name}
            />
          </div>
        </Card.Body>
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
    console.log(lecture);
    let className = "notcompleted";
    if (lecture.completed) {
      className = "completed";
    }
    function markitcomplete() {
      className = "completed";
    }
    return (
      <div className="lectures">
        <div className={className}>
          <details>
            <summary>
              <h3>{lecture.title}</h3>
            </summary>

            <div class="video-player">
              <VideoPlayer src={lecture.video} width="720" height="420" />
              <div>
                <p>{lecture.description}</p>
                <Button
                  id="completedbtn"
                  className="markitdone"
                  onClick={markitcomplete()}
                >
                  Mark it as done
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header></Header>
      <div className="content">
        {/* <Sidebar></Sidebar> */}
        <div className="course-detail-div">
          <RenderCourseInfo></RenderCourseInfo>
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

export default StudentCourseswithID;
