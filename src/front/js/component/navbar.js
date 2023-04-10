import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div id="mySidenav" className="sidenav">
  <span onclick="openNav()">open</span>      
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a>
        <div id="main">
          <a href="https://3000-deontaemurp-newgrouppro-893lv3uwazv.ws-us93.gitpod.io/single/0">
            Bookshelf,
          </a>
          
          <a href="https://3000-deontaemurp-newgrouppro-893lv3uwazv.ws-us93.gitpod.io/single/0">
            Bookshelf,
          </a>
        </div>
        {/* <div className="container"> */}

        <Link to="/">
          {/* <button className="btn btn-primary">
            DashBoard
            <span className="navbar-brand mb-0 h1"></span> */}
          {/* </button> */}
        </Link>

        <div className="ml-auto"></div>

        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Make a Post</button>
          </Link>
        </div>
      </div>

      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};
