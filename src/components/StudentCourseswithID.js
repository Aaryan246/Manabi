import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import img from "../assets/Manabi.png"
import VideoPlayer from "react-video-js-player";


function StudentCourseswithID(props) {
    // function lectures(){
    //     const
    // }
    function RenderCourseInfo() {
        console.log(props.course)
        return (
            <Card>

                <CardBody>
                    <CardTitle><h1>{props.course.name}</h1></CardTitle>
                    <div className='courseimg'>
                        <CardText>{props.course.description}</CardText>
                        <CardImg className='courseimg-img' width="50%" src={props.course.image} alt={props.course.name} />
                    </div>

                </CardBody>
            </Card>

        );
    }
    
    const feedbacks = props.course.feedback.map((feedback)=>{
        return(
        <li>
            {feedback.feedback}<br />
            --{feedback.author}
        </li>

        )

}
    
)

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
            <div className={className}>

                <details>
                    <summary><h3>{lecture.title}</h3></summary>
                    <p>{lecture.description}</p>
                    <VideoPlayer
                        src={lecture.video}
                        width="720"
                        height="420"
                    />

                    <button id='completedbtn' onClick={markitcomplete()}>Mark it as done</button>
                </details>
            </div>
        )
    })

    return (
        <div>
            <Header></Header>
            <div className="content">
                {/* <Sidebar></Sidebar> */}
                <div className='course-detail-div'>
                    <RenderCourseInfo></RenderCourseInfo>
                    <Card>
                        <h2> Lectures</h2>
                        {lectures}
                    </Card>

                    <Card>
                        <h2>Feedback</h2>
                        <ul>
                            {feedbacks}
                        </ul>
                    </Card>

                </div>

            </div>
        </div>
    )
}


export default StudentCourseswithID;