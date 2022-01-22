import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data.json"
import Button from "react-bootstrap/Button";
function Sidebar() {
    return (
        <div className="sidebar">

            <p className="name">hello {data.student[0].name}</p>
            
           
            
            

        </div>
    )
}
export default Sidebar;