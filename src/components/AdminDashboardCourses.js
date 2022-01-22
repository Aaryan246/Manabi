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
    const course = data.courses.map((course) => {
        return (
                <tr>
                    <td>
                        {course.name}
                    </td>
                    <td>
                        {course.author}
                    </td>
                    <td>
                        {course.lecture.length}
                    </td>
                    <td>
                        {course.price}
                    </td>
                </tr>
        );
      });
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <h2>Courses:</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Author</th>
                <th>No of Lectures</th>
                <th>Price</th>
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