import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";

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
            <div className="form-control">
              Discover (Needs to be up under The Algolia)
              <input className="form-control me-2 ml-100" />
            </div>
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
                      <Link to="/">Createstory</Link>
                    </li>
                    <li>
                      <Link to="/thebookclubfavorites">
                        View Favorites is undefined
                      </Link>
                    </li>
                    <li>
                      <Link to="/thebookclub">Logout</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </ul>
          <Link to="/createUser">
            <button>Login</button>
          </Link>
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
