import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data.json";
import HeaderAdmin from "./HeaderAdmin";

function AdminDashboard(){
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <h2>Courses: {data.courses.length}</h2>
            <h2>Teachers: {data.teachers.length}</h2>
            <h2>Teachers to be verified: {data.admin[0].teacher.length}</h2>
        </div>
    )
}

export default AdminDashboard;