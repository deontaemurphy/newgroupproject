import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const The_Book_Club = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
 
  return <div>h1 tag</div>;
};

export default The_Book_Club;
