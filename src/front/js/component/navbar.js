import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary">
            Navbar is in white?
            <span className="navbar-brand mb-0 h1"></span>
          </button>
        </Link>

            <div className="ml-auto">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzovqILuk-M9wwSilpOYPBdbsnRmiwBzM4g&usqp=CAU" />
        </div>

        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
             Make a Post
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
