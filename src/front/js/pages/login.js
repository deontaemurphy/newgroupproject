import React from "react";

//this is the login
export const Login = () => {
  return (
    <div className="">
      <div className="">
        <form action="">
          <div className="mb-3">
            <label htmlFor="Email"></label>
            <input type="email" placeholder="email Address" />
          </div>
          <div className="mb-3">
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn btn-success">Login in</button>
          <p></p>
          <button className="btn btn-default border">Create Account</button>
        </form>
      </div>
    </div>
  );
};
