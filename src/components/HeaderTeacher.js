import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function HeaderTeacher() {
  const history = useHistory();
  const handleLogout = async () => {
    history.push("/");
  };
  return (
    <div className="nav-bar">
      <div className="logo-tab">Manabi</div>

    const history = useHistory();
    const handleLogout = async () => {
        history.push("/");
    };
    return (
        <div className="nav-bar">

            <div className="logo-tab">Course

            </div>

            <div onClick={handleLogout} className="logout-tab">
                Logout

            </div>
        
            <div className="course-tab">
                <Link className="link" to={"/TeacherDashboard"}>
                Home
                </Link>
            </div>
        </div>



    )
}

export default HeaderTeacher;
