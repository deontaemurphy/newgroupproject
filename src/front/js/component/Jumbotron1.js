import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Jumbotron1 = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a href="">
          <span className="navbar-brand mb-0 h1">"Home"</span>
        </a>
      </div>
      <div>
        <div className="ml-auto">
          <Link to="/auth/search/thebookclub">
            <button className="btn btn-primary">Search</button>
          </Link>
        </div>

        <div>
          <iframe
            width="1000"
            height="400"
            src="https://www.youtube-nocookie.com/embed/tme-KxDyiKY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </nav>
  );
};
