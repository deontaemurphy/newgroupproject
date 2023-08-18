import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/auth/thebookclub");
    }
  }, [store.token]);
  return (
    <div className="text-center mt-5">
      <hr />
      <h1 className="open">The Landing Page Journey</h1>
      <hr />
      <span className="close"></span>

      <div className="homepage">
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />

          <p className="lead">The featured book (cover)</p>
        </a>
        <hr></hr>
        <iframe
          width="370"
          height="250"
          src="https://www.youtube.com/embed/5m6Dpvky20Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/embed/5m6Dpvky20Y">
          <p id="watson"> Como Esta ? How are you</p>
          <hr></hr>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pxj20DQee98"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </a>
        <p>Children's Tab</p>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i6yFRXUDC-w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr />
        <p>Sherlock Holmes #25:</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0-Hj_bi9Qto"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://youtu.be/0-Hj_bi9Qto">
          <p>The Empty House</p>
        </a>
        Line Leader: "On this page you can browse"
      </div>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Login
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Titulo
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <nav className="navbar navbar-light bg-light">
                <div className="flo">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon">This is The Sub Navbar</span>
                  </button>
                  <ul className="push">
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
                          <span className="nav-link">
                            Discover Your Palabra
                          </span>
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
                            <span
                              onClick={() => actions.logut()}
                              className="nav-link"
                            >
                              Log out
                            </span>
                          </Link>
                        )}
                      </li>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="modal-footer">
              <Link to="/logout">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close This Or to logout
                </button>
              </Link>
              <Link to="/">
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
