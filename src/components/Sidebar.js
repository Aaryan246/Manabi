import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data.json"

function Sidebar(){
    return(
        <div className="sidebar"> 
            <p className="name">hello {data.student[0].name}</p>
            <div>
            <Link className="link" to={"/studentDashboard/courses"}>Courses</Link>
            </div>
            <br/>
            <div>
              <Link className="link" to={"/studentDashboard/cart"}>Cart</Link>
            </div>
            
        </div>
    )
}
export default Sidebar;