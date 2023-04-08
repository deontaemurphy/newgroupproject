import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="https://3001-deontaemurp-newgrouppro-b5k0z3jw2og.ws-us93.gitpod.io/?vscodeBrowserReqId=1680962479538">
          <span className="navbar-brand mb-0 h1">
            React Boilerplate Template
          </span>
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
