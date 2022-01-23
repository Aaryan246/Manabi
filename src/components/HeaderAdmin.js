import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function HeaderAdmin() {
  const history = useHistory();
  const handleLogout = async () => {
    history.push("/");
  };
  return (
    <div className="nav-bar">
      <div className="logo-tab">Manabi</div>
      <div onClick={handleLogout} className="logout-tab">
        Logout
      </div>
      <div className="course-tab">
        <Link className="link" to={"/adminDashboard/courses"}>
          Course
        </Link>
      </div>
      <div className="Home-tab" id="teacher-nav">
        <Link className="link" to={"/adminDashboard/teacher"}>
          teacher
        </Link>
      </div>
      <div className="Home-tab" id="student">
        <Link className="link" to={"/adminDashboard/student"}>
          Student
        </Link>
      </div>
      <div className="cart-tab">
        <Link className="link" to={"/adminDashboard/verification"}>
          Verification
        </Link>
      </div>

      <div  id="Home-tab" className="Home-tab">
        <Link className="link" to={"/adminDashboard"}>
        Home
        </Link>
       
      </div>
    </div>
  );
}

export default HeaderAdmin;
