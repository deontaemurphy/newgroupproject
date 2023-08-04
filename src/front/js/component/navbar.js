import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
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
              href="https://github.com/Doctorine06/SimpleCounter/blob/main/src/js/component/home.jsx"
            >
              Home.jsx
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

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0-Hj_bi9Qto"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <button
                    class="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discover
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to="/Discoveryourword/book">Buscalo</Link>
                    </li>

                    <li>
                      <Link to="/auth/searchingthebookclub/home">
                        Sherlock Holmes
                      </Link>
                    </li>
                    <li>
                      <Link to="/auth/searchingthebookclub/home">
                        Are you lost?
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>;
}
