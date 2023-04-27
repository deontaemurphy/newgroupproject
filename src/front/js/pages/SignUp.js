// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import CreateAccountValidation from "./CreateAccountValidation.js";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    birthday: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let signup = await actions.signup(data);
      // console.log(signup);
      if (typeof signup !== "object") {
        navigate("/");
      } else {
        actions.setAlert({
          type: "danger",
          msg: signup.message,
          show: true,
        });
      }
    } catch (e) {
      alert(e.message);
    }
    return false;
  };

  const onChange = (data) => {
    let aux = { ...userData };
    aux[data.name] = data.value;
    setUserData(aux);
  };

  return (
    <div className="container-fluid">
      <div className="whole-screen row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto p-4">
        <div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <h1 className="font-weight-light">Sign up</h1>
            </div>
            <div className="row justify-content-center">
              <form
                onChange={(e) => onChange(e.target)}
                onSubmit={handleSubmit(onSubmit)}
                control=""
                className="form-group p-2 w-100"
              >
                <div className="row justify-content-between">
                  <label htmlFor="birthday">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                    placeholder="Username"
                    {...register("username", {
                      required: "Please enter your username",
                    })}
                  />
                  {errors.username && (
                    <span className="text-danger">
                      {errors.username.message}
                    </span>
                  )}
                </div>
                <div className="row justify-content-center mt-2">
                  <label htmlFor="birthday">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "E-mail is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>
                <div className="row justify-content-center mt-2">
                  <label htmlFor="birthday">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required.",
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {/* <div className="row justify-content-center mt-2"> */}
                {/* <label htmlFor="birthday">Birthday</label>
                  <input
                    type="date"
                    placeholder="Birthday"
                    className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
                    id="birthday"
                    name="birthday"
                    {...register("birthday", {
                      required: "Birthday is required.",
                    })}
                  />
                  {errors.birthday && (
                    <span className="text-danger">
                      {errors.birthday.message}
                    </span>
                  )}
                </div> */}
                <div className="row justify-content-center mt-4">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn-primary rounded w-100 border-0 py-2"
                  />
                </div>
              </form>
            </div>
            <div className="row justify-content-center">
              <div className=" ">
                <p>
                  Have an account? <Link to="/Signup">Log in here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export const CreateAccount = () => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const handleInput = (event) => {
//     setValues((prev) => ({}));
//   };

//   // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(LoginValidation(values));
//   };
//   return (
//     <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
//       <div className="bg-white p-3 rounded w-25 vh-80">
//         <h1>Register</h1>
//         <form action="">
//           <div className="mb-3" onSubmit={handleSubmit}>
//             <label htmlFor="Name">UserName</label>
//             <input
//               type=""
//               placeholder="Name"
//               name="username"
//               onChange={handleInput}
//             />
//             {errors.name && <span className="text-danger">{errors.name}</span>}
//           </div>
//           {/* removed lastName */}
//           <div className="mb-3">
//             <label htmlFor="Email">Email Address</label>
//             <input
//               type="email"
//               placeholder="email Address"
//               name="email-Address"
//               onChange={handleInput}
//             />
//             {errors.email && (
//               <span className="text-danger">{errors.email}</span>
//             )}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleInput}
//             />
//             {errors.password && (
//               <span className="text-danger">{errors.password}</span>
//             )}
//           </div>
//           {/*have to fix birthday so instead of text box drop down and enter */}
//           <div className="mb-3">
//             <label htmlFor="birthday">Birthday</label>
//             <input
//               type="birthday"
//               placeholder="Birthday"
//               onChange={handleInput}
//               name="birthday"
//             />
//             {errors.birthday && (
//               <span className="text-danger">{errors.birthday}</span>
//             )}
//           </div>
//           {/* the rounded-0 raounds buuton and the w-100 elongated it taking to the width */}
//           <button type="submit" className="btn btn-success rounded w-100">
//             Register
//           </button>
//           <p></p>
//           <Link
//             to="/"
//             className="btn btn-default border w-100 bg-light text-decoration-none"
//           ></Link>
//         </form>
//       </div>
//     </div>
//   );
// };
