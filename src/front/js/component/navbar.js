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
            <li className="nav-item">
              <a className="nav-link" href="#">
              Profile
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>   <span>   Code Name Kids Next Door : </span></li>
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
{
   <nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav> 
}
