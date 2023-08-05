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
        <div className="ml-auto">
        <hr></hr>
        </div>
      </div>
    </nav>
  );
};
