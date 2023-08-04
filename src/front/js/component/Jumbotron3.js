import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const LogoutJumbotron = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <div class="jumbotron">
      <h1 className="display-4">Start The Book Club Exclusive Reading</h1>
      <img src="https://i.imgur.com/KFp3ilV.jpeg" />
      <p class="lead">The featured book (cover)</p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="leadme">
        <Link to="/thebookclubhome">
          <span class="btn btn-primary btn-lg" role="button">
            Learn more
          </span>
        </Link>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5m6Dpvky20Y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
