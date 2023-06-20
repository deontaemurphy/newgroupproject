import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const The_Book_Club_Favorites = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token === null ||
      store.token === "" ||
      store.token === undefined
    ) {
      navigate("/");
    }
  }, []);

  return <div>h1 tag</div>;
};

export default The_Book_Club_Favorites;
