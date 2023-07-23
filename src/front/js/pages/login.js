import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

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
  // let auth = sessionStorage.getItem("token");
  // {Laura suggestes a true statement in order to fix the broken authenticator}
  // useEffect(() => {
  console.log(store.token);
  if (token && token != "" && token != undefined) {
    useNavigate("/thebookclub");
    // }
    // Authentincate
    // if (auth === true || auth === defined || auth === "") {
    // navigate("/thebookclub");
  }
  // }, []);
  return (
    <div>
      <img
        src="data:image/png;base64,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"
        class="rounded float-end"
        alt="BoiseCascade1"
      ></img>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <img
        src="data:image/png;base64,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"
        class="rounded float-start"
        alt="BoiseCascade"
      ></img>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <h1 className="display-1">The</h1>
      <h1 className="display-2">World</h1>
      <h1 className="display-3">Is</h1>
      <h1 className="display-4">Your</h1>
      <h1 className="display-5">Personal</h1>
      <h1 className="display-6">Library</h1>
      <button onClick={(e) => handleClick(e)}>Login</button>
      <Link to="/createUser">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Login;
