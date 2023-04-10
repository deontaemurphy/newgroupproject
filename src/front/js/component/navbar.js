import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a>
        <a href="https://3000-deontaemurp-newgrouppro-893lv3uwazv.ws-us93.gitpod.io/single/0">
          About
        </a>
        {/* <div className="PlaceHolder"> */}

        <Link to="/">
          {/* <button className="btn btn-primary">
            DashBoard
            <span className="navbar-brand mb-0 h1"></span> */}
          {/* </button> */}
        </Link>

        <div className="ml-auto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzovqILuk-M9wwSilpOYPBdbsnRmiwBzM4g&usqp=CAU" />
        </div>

        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Make a Post</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
