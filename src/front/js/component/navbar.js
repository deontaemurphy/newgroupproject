import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/demo">
          Navbar(logo)
        </Link>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemHome mt-2 mx-4">
            <Link to="/">
                Home
                </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
                Library
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to="/Createstory">
                  User
                 </Link>

                </li>
                <li>
                <Link to="/demo">
                    View Favorites
                    </Link >

                </li>
                <li>
                <Link to="/">
                    Logout
                    </Link >
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex w-100" role="search">
            <input
              className="form-control me-2 ml-100"
              type="search"
              placeholder="Look it up"
              aria-label="Find the right read"
            />
            <button className="btn btn-outline-success" type="submit">
            Login/Signup
            </button>
          <Link to="/single:theid"></Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
