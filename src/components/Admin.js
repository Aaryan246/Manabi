import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Admin(){
    return(
        <div>
             <div id='login-page'>
            
                <div id='login-card'>
                    <h2>Welcome!</h2>
                    <br/><br/>
                    <h3>User Name</h3>
                    <input type="text" required></input>
                    <br/>
                    <h3>Password</h3>
                    <input type="password" required></input>
                    <br/><br/>
                    <Link to="/adminDashboard">
                    <button > Log in </button>
                    </Link>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}
export default Admin;