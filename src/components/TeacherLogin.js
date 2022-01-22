import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Teacher.css";

function TeacherLogin() {
  return (
    <div>
      <div id="login-page">
        <div id="login-card">
          <h2>Welcome!</h2>
          <br />
          <br />
          <h3>User Name</h3>
          <input class="input-cl" type="text"></input>
          <br />
          <h3>Password</h3>
          <input class="input-cl" type="text"></input>
          <br />
          <br />
          <Link to="/teacherDashboard">
            <Button> Log in </Button>
          </Link>
          <br />
          <br />
          <Link className="teach-sign" to="/teacherSignin">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TeacherLogin;
