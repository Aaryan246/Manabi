import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function signinAlert(){
    alert('We will inform you once the admin verifies you profile. thank you!');
}
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
                <input type="password"></input>
                <br/>
                <h3>Re-enter Password</h3>
                <input type="password"></input>
                <br/>
                <h3>Verification</h3>
                <input type="file"></input>
                <br/><br/>
                <button onClick={()=>{ alert('We will inform you once the admin verifies you profile. thank you!'); }}>Sign in </button>
                <br/><br/>
                <Link to="/teacherLogin">
                    Log in
                </Link>
                
            </div>
        </div>
        </div>
      
    )
}
export default TeacherLogin;