import React, { Component, useState } from 'react';
import data from "../data.json";
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "./StudentCourse.css"
import Header from './Header';
function RenderCourse ({course, onClick}) {
    console.log(course.price);
    return (
        <Card>
            
                <CardImg width="100%" src={course.image} alt={course.name} />
                <CardImgOverlay>
                    <CardTitle>{course.name}</CardTitle>
                </CardImgOverlay>
                <h3>-{course.author}</h3>
                
                <h6>{course.lecture.length} lecture   Rs. {course.price}</h6>
                <button>Buy Now</button>


        </Card>
    );
  }
function StudentCourses(){
    const [searchTerm,setSearchTerm]= useState(""); 
    const courses = data.courses.filter((val)=>{
        console.log(val.name);
        console.log(searchTerm);
        if(searchTerm == ""){
            return val
        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
    }).map((course) => {
        console.log(course);
            return (
            <div className="courses"  key={course.id}>
                <RenderCourse course={course} onClick={course.onClick} />
            </div>
      );
    });
    return(
        <div >
            <Header></Header>
            <div className='container'>
                <div className='heading-course'>
                <h1>Courses</h1>
                <input 
                    className='input'
                    type="text" 
                    placeholder="Search..." 
                    onChange={(event)=>{
                        setSearchTerm(event.target.value);
                    }} />
                </div>
            
            <div className='courses-all'>
                {courses}
            </div>

            </div>
            
        </div>
        
    )
}
export default StudentCourses;