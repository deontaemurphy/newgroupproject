import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  let auth = sessionStorage.getItem("token");
  // useEffect(() => {
  console.log(store.token);
  // if (token !== || token !== undefined || token !== "") {
  navigate("/thebookclub");
  // }
  if (auth === true || auth === defined || auth === "") {
    navigate("/thebookclub");
  }
  // }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={(e) => handleClick(e)}>Login</button>
      <Link to="/createUser">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Login;
