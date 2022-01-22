import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody,Row,Col, Label} from 'reactstrap';
import { Link } from 'react-router-dom';



function StudentCourseswithID(props){

    function RenderCourseInfo(course){
        console.log(course.course.image)
        return(
            <Card>
              <CardImg width="100%" src={course.course.image} alt={course.course.name} />
                <CardBody>
                  <CardTitle>{course.course.name}</CardTitle>
                  <CardText>{course.course.description}</CardText>
              </CardBody>
            </Card>
        
      );
    }
    console.log(props.course);
    return(
        <div>hello
        <RenderCourseInfo course={props.course}></RenderCourseInfo>
        <image src={props.course.image}/>
        </div>
    )
}
    
    
    export default StudentCourseswithID;