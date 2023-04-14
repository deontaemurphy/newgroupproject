import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateAccountValidation from "./CreateAccountValidation.js";
export const CreateAccount = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.//
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
  };
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      <div className="bg-white p-3 rounded w-25 vh-80">
        <h1>Register</h1>
        <form action="">
          <div className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="Name">User Name</label>
            <input
              type=""
              placeholder="Name"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          {/* removed lastName */}
          <div className="mb-3">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              placeholder="email Address"
              name="email-Address"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {/*have to fix birthday so instead of text box drop down and enter */}
          <div className="mb-3">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="birthday"
              placeholder="Birthday"
              onChange={handleInput}
            />
            {errors.birthday && (
              <span className="text-danger">{errors.birthday}</span>
            )}
          </div>
          {/* the rounded-0 raounds buuton and the w-100 elongated it taking to the width */}
          <button type="submit" className="btn btn-success rounded w-100">
            Register
          </button>
          <p></p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          ></Link>
        </form>
      </div>
    </div>
  );
};
