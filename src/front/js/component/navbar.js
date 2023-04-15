import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/demo">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/">
                Home
                </Link>
            </li>

            <li className="nav-item">
            <Link to="/user">

              Signup
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
                Discover
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to="/user">
                 Library
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
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Look it up"
              aria-label="Find the right read"
            />
            <button className="btn btn-outline-success" type="submit">
            buscar
            </button>
          <Link to="/single:theid"></Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
