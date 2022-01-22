import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {

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
            <div className="course-tab" >

                <Link className="link" to={"/studentDashboard/courses"}>
                    Course
                </Link>
            </div>
            <div className="cart-tab">
                <Link className="link" to={"/studentDashboard/cart"}>
                    Cart
                </Link>
            </div>

        </div>



    )
}

export default Header;