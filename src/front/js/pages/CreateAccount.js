import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateAccountValidation from "./CreateAccountValidation.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CreateAccount = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    lastname: "",
    birthday: new Date(),
    username: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    let newValues = values;
    newValues[event.target.name] = event.target.value;
    setValues(newValues);
  };

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.//
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(CreateAccountValidation(values));
  };
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      {/* <button onClick={() => console.log(values)}>click me</button> */}
      <div className="bg-white p-3 rounded w-25 vh-80">
        <h1>Register</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name">First Name</label>
            <input
              type=""
              placeholder="Name"
              name="name"
              onChange={(e) => handleInput(e)}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="Name">Last Name</label>
            <input
              type=""
              placeholder="Last Name"
              name="Last name"
              onChange={(e) => handleInput(e)}
            />
            {errors.lastname && (
              <span className="text-danger">{errors.lastname}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="username">UserName</label>
            <input
              type=""
              placeholder="UserName"
              name="username"
              onChange={handleInput}
            />
            {errors.username && (
              <span className="text-danger">{errors.username}</span>
            )}
          </div>
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
            <label for="birthday">Birthday:</label>
            <select id="birthday" name="birthday" required>
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>

              <option value="">Day</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>

              <option value="">Year</option>
              <option value="1900">1900</option>
              <option value="1901">1901</option>
              <option value="1902">1902</option>
            </select>

            {/* <DatePicker
              placeholderText="Select Date"
              selected={values.birthday}
              onChange={(date) => {
                handleInput({ target: { name: "birthday", value: date } });
              }}
            /> */}
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
