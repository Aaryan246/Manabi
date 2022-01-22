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

function AdminDashboardTeacher(){
    const teacher = data.teachers.map((teacher) => {
        return (
                <tr>
                    <td>
                        {teacher.name}
                    </td>
                    <td>
                        {teacher.email}
                    </td>
                    <td>
                        {teacher.course.length}
                    </td>
                </tr>
        );
      });
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <h2>Teachers:</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>No of Courses</th>
                </tr>
            </thead>
            <tbody>
                {teacher}
            </tbody>
            
            </Table>
        </div>
    )
}
export default AdminDashboardTeacher;