import React from "react";
import { Link } from "react-router-dom";
import Createstory from "../pages/Createstory";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemHome mt-2 mx-4">
              <Link to="/thebookclubfavorites">
                <i class="fa-solid fa-bookmark fa-bounce"></i>
              </Link>
            </li>
            <a className="navbar-brand" href="https://www.algolia.com/">
              Search With Algolia
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
              <Link to="/">
                Navbar<i class="fa-solid fa-bookmark"></i>
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Discover Your Palabra
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
                      <Link to="/thebookclub">View Favorites</Link>
                    </li>
                    <li>
                      <Link to="/home">Logout</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <form className="d-flex w-100" role="search" />
            
            <div className="form-control">Discover
            <input className="form-control me-2 ml-100" />
            </div>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="this way to the linkage of the bokks being a public domain read."
                >
                  My Book <span></span>
                </a>
                <strong>H</strong>
              </li>
              <li>
                <a className="dropdown-item" href="#"></a>
              </li>

              <li>
                {" "}
                <span> Modify</span>
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
            <a href ="https://3000-deontaemurp-newgrouppro-ov2uc672d2n.ws-us100.gitpod.io/createUser"></a>
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
