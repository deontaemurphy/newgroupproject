import React from "react-router-dom";

const CreateAccountValidation = (values) => {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  /*=== check whenther two operators are equal an returns boolean(true or false) results */

  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }
  if (values.lastname === "") {
    error.lastname = "Name should not be empty";
  } else {
    error.lastname = "";
  }
  if (values.username === "") {
    error.username = "UserName should not be empty";
  } else {
    error.username = "";
  }
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
};

export default CreateAccountValidation;
