import React from "react";
import { Link } from "react-router-dom";
// import fontawesome from "font-awesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <li class="nav-item dropdown">
        {/* <i> */}
        className="fa-regular fa-bars fa-rotate-180" style="color: #3c9c35;"
        <a
          class="nav-link dropdown-toggle"
          href="https://www.kw.zain.com/en/web/myzain"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hamburger Menu
        </a>
      </li>
      <div className="container">
        <Link to="/">
          {/* <Link to = "className= btn btn-primary"> */}
          {/* </Link> */}
          <button className="btn btn-primary" >
            {/* <i> */}
             style="color: #3c9c35;"
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
