import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/demo">Navbar(logo)</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemHome mt-2 mx-4">
              <Link to="/">Home</Link>
            </li>
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Discover Your Parabla
                  </a>
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
                      <Link to="/Createstory">User</Link>
                    </li>
                    <li>
                      <Link to="/demo">View Favorites</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <form className="d-flex w-100" role="search" />
            <input className="form-control me-2 ml-100" />
            <div>Discover</div>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="this way to the linkage of the bokks being a public domain read."
                >
                  My Book <span>donde estas las bibl 'i' oeteca</span> (sus
                  libre)
                </a>
                <bold>Too much "c" </bold>
              </li>
              <li>
                <a className="dropdown-item" href="#"></a>
              </li>

              <li>
                {" "}
                <span> Code Name Kids Next Door : </span>
              </li>
              <li>
                <a className="dropdown-item" href="google.com">
                  Something else here
                </a>
              </li>
            </ul>
            <li className="nav-item">
              <a className="nav-link disabled"></a>
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
              Signup
            </button>
            <Link to="/login.js"></Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
{
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">"Home"</span>
      </Link>
      <div className="ml-auto">
        <Link to="/">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </div>
  </nav>;
}
