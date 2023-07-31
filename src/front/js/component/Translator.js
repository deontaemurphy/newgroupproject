import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const NavbarStretch = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
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
            <a
              className="navbar-brand"
              href="https://dashboard.algolia.com/apps/7VW33R3U8I/dashboard"
            >
              Search With Algolia(iEDTlxfP7yn7HNp6F9XgG)
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
              <li className="nav-item">
                <Link to="/">
                  <span className="nav-link active" aria-current="page">
                    Home
                  </span>
                </Link>
              </li>
              <li
                className="nav-item"
                a
                href="https://www.youtube.com/watch?v=ZrxCRySeHNE"
              >
                <Link to="/Discoveryourword/book">
                  <span className="nav-link">Discover Your Palabra</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/auth/searchingthebookclub/home">
                  <span className="nav-link">Search</span>
                </Link>
              </li>
              <li className="nav-item">
                {!store.token ? (
                  <Link to="/login">
                    <span className="nav-link">Login</span>
                  </Link>
                ) : (
                  <Link to="/logout">
                    <span onClick={() => actions.logut()} className="nav-link">
                      Log out
                    </span>
                  </Link>
                )}
              </li>
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
      <Link to="/searchthebookclub">
        <span className="navbar-brand mb-0 h1">"Home"</span>
      </Link>
      <div className="ml-auto">
        <Link to="/searchthebook">
          <button className="btn btn-primary">Search</button>
        </Link>
      </div>
    </div>
  </nav>;
}
