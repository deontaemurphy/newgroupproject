import React from "react";
import { Link } from "react-router-dom";
import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary">
            {/* <i> */}
              className="fa-regular fa-bars fa-rotate-180" style="color:
              #3c9c35;"
            {/* </i> */}
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </button>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
