import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import LoginValidation from "./LoginValidation.js";

//this is the login
export const Login = () => {
  // line below is used for login validation
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  const [errors, setErrors] = useState({});
  // const handleInput = (event) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [event.target.name]: [event.target.value],
  //   }));
  // };
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.//
  const handleSubmit = (event) => {
    event.preventDefault();
    // this is flux action
    actions
      .login(email, password)
      // this takes you to home page when u login
      .then((response) => navigate("/"))
      .catch((error) => setErrors(error));
  };
  const handleClick = () => {
    const opt = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        user_id: user_id,
      }),
    };
    fetch(
      "https://3001-deontaemurp-newgrouppro-gcgtzxginv1.ws-us93.gitpod.io/api/token"
    )
      .then((resp) => {
        if (resp.ststus === 200) return resp.json();
        else alert("there will be an error ");
      })
      .then()
      .catch((error) => {
        console.error("there was an error", error);
      });
  };
  return (
    //the line under this places everything in the middle of the screen
    // The onsubmit event occurs when a form is submitted.//
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      <h1>Login</h1>
      <div className="bg-white p-3 rounded w-25 vh-80">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-0"
              value={email}
              placeholder="Email"
              name="email"
              required
            />
            {/* line underneath will print the errors after retrieivng them from LoginValidation */}
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
              name="password"
              required
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {/* the rounded-0 raounds buuton and the w-100 elongated it taking to the width */}
          <button
            type="submit"
            className="btn-grad rounded-pill w-100"
            onClick={handleClick}
          >
            Login in
          </button>
          <p></p>
          <Link
            to="/createaccount"
            className="btn-grad rounded-pill border w-100 bg-light text-decoration-none "
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};
