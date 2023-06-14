import React, { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";

export default function UpdatePassword() {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [onSuccess, setOnSuccess] = useState(false)
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  let token = searchParams.get("token")
  console.log("TOKEN HERE", token)

  const handleClick = (e) => {
    e.preventDefault();
    actions.changePassword(token, password)
    .then((res) => setOnSuccess(true))
    .catch((err) => setError(err));

  };
  return (
    <div>
      <div>
        <form className="loginForm" onSubmit={handleClick}>
          <h1>New Password</h1>
        { !onSuccess && 
         <>
          <div className="input-field">
            <input
              className="myInput"
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Update Password</button>
          </>}
          {onSuccess && <h3>Password Succesfully Changed</h3>}
        </form>
      </div>
    </div>
  );
}
