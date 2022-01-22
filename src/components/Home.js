import React from 'react';
import {Link} from 'react-router-dom';
function HomeDisplay(){
    return(
        <div>
        <h1>Home</h1>
        <Link to="/studentlogin">
          Login
        </Link>
      </div>
    );
   
}
export default HomeDisplay;