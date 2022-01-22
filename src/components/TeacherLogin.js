import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function TeacherLogin(){
    return(
        <div>
             <div id='login-page'>
            
            <div id='login-card'>
                <h2>Welcome!</h2>
                <br/><br/>
                <h3>User Name</h3>
                <input type="text"></input>
                <br/>
                <h3>Password</h3>
                <input type="text"></input>
                <br/><br/>
                <button> Log in </button>
                <br/><br/>
                <Link to="/teacherSignin">
                    Sign up
                </Link>
            </div>
        </div>
        </div>
      
    )
}
export default TeacherLogin;