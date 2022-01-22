import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../assets/Manabi.png";

function HomeDisplay() {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <img src={logo} width={400} height={400} />
        <div>
          <Button variant="outline-light" size="lg" className="homeButton">
            <Link to="/studentlogin" className="homeLinks">
              Login For Student
            </Link>
          </Button>
        </div>
        <div>
          <Button variant="outline-light" size="lg" className="homeButton">
            <Link to="/teacherlogin" className="homeLinks">
              Login For Teachers
            </Link>
          </Button>
        </div>
        <div>
          <Button variant="outline-light" size="lg" className="homeButton">
            <Link to="/admin" className="homeLinks">
              Admin
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default HomeDisplay;
