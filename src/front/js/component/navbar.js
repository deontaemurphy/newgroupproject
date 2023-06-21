import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemHome mt-2 mx-4">
              <Link to="/thebookclubfavorites">
                <i className="fa-solid fa-bookmark fa-bounce"></i>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://3000-doctorine06-newgrouppro-39pq6je7xty.ws-us100.gitpod.io/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.amazon.com/b/?node=283155&tag=mh0b-20&hvadid=78271604260220&hvqmt=e&hvbmt=be&hvdev=c&ref=pd_sl_1670j3im06_e"
                  >
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
                      <Link to="/createUser">Create User</Link>
                    </li>
                    <li>
                      <Link to="/Createstory">Createstory</Link>
                    </li>
                    <li>
                      <Link to="/searchthebookclub">Search</Link>
                    </li>
                    <li>
                      {!store.token ? (
                        <Link to="/login">
                          <button>Login</button>
                        </Link>
                      ) : (
                        <button onClick={(e) => handleClick(e)}>Logout</button>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </ul>
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
