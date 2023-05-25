import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                Discover
              </a>
              <ul className="dropdown-menu">
                <li>
                  <ul>Orange</ul>
                  <a className="dropdown-item">
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
                  <a
                    className="dropdown-item"
                    href="https://3000-deontaemurp-newgrouppro-97s7svokbii.ws-us97.gitpod.io/single/0"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">"Disabled"</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
{
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <Link to="/home">
        <span className="navbar-brand mb-0 h1">"Home"</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </div>
  </nav>;
}
