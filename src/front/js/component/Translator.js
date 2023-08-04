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
               Inquistivo
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link to="/Discoveryourword/book">Libre</Link>
                </li>

                <li>
                  <Link to="/">
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
  );
};
