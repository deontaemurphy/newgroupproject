import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Login from "./login.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { SignUp } from "./SignUp";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/thebookclub");
    }
  }, [store.token]);

  return (
    <div className="text-center mt-5">
      <Login />
      {/* <SignUp /> */}
    </div>
  );
};
