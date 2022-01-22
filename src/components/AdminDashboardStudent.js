import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import data from "../data.json";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Table,
} from "reactstrap";

function AdminDashboardCourses(){
    const course = data.student.map((student) => {
        return (
                <tr>
                    <td>
                        {student.name}
                    </td>
                    <td>
                        {student.aemail}
                    </td>
                    <td>
                        {student.course.length}
                    </td>
                </tr>
        );
      });
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <h2>Students:</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>No of Courses Enrolled</th>
                </tr>
            </thead>
            <tbody>
                {course}
            </tbody>
            
            </Table>
        </div>
    )
}
export default AdminDashboardCourses;