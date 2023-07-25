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
          <Link to="/searchthebook">
            <button className="btn btn-primary">Search</button>
          </Link>
        </div>

        <div className="stretch">
          <iframe
            width="630"
            height="70"
            src="https://www.youtube.com/embed/0-Hj_bi9Qto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="530"
            height="215"
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
