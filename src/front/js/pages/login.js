import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginValidation.js";
//this is the login
export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.//
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  return (
    //the line under this places everything in the middle of the screen
    // The onsubmit event occurs when a form is submitted.//
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      <h1>Login</h1>
      <div className="bg-white p-3 rounded w-25 vh-80">
        <form action="" onSubmite={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              onChange={handleInput}
              className="form-control rounded-0"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Password"
              onChange={handleInput}
              className="form-control rounded-0"
              name="password"
            />
          </div>
          {/* the rounded-0 raounds buuton and the w-100 elongated it taking to the width */}
          <button type="submit" className="btn btn-success rounded-0 w-100">
            Login in
          </button>
          <p></p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};
