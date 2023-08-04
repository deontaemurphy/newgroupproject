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
      <a href="https://archive.org/details/adventuresofsher00doylrich/page/n15/mode/2up?ref=ol&view=theater">
        <img src="https://i.imgur.com/KFp3ilV.jpeg" />
      </a>
      <p class="lead">The featured book (cover)</p>

      <hr class="my-4" />
      <p>He chuckled to himself and rubbed his long, nervous hands together.</p>
      <p className="leadme">
        <a href="https://archive.org/details/adventuresofsher00doylrich/page/4/mode/2up?ref=ol&view=theater">
          <span class="btn btn-primary btn-lg" role="button">
            Read More
          </span>
        </a>
      </p>
    </div>
  );
};
