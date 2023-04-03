import React from "react";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      <div className="bg-white p-3 rounded w-25 vh-80">
        <h1>Register</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="Name">Name</label>
            <input type="" placeholder="Name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="Email">Email Address</label>
            <input type="email" placeholder="email Address" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          {/* the rounded-0 raounds buuton and the w-100 elongated it taking to the width */}
          <button className="btn btn-success rounded-0 w-100">Register</button>
          <p></p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};
