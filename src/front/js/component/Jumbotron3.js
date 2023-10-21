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
      <button onClick={handleClick}>Logout</button>
    </div>
    <p style="color:blue">{open up chat//: I can tell that you're into me"(the sweat)"</p>}
    </p>
  );
};
