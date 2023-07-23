import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Authorization = () => {
  const handleClick = (e) => {
    e.preventDefault();
    actions.register(email, password);
  };
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/auth/thebookclub");
    }
  }, [store.token]);
  return (
    <div>
      <h1>Spolighted Books</h1>
      <div className="card">
        <div className="card-header">Featured Books</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">This is a house above my book button</p>
          <div className="img-top">
            <a href="https://soundcloud.com/steven-j-ferguson-ii/sets/thinking-is-neccessary">
              <img
                src="data:image/jpeg;base64,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"
                class="img-fluid"
                alt="WorkShop2020"
              />
            </a>
            <Link to="/publishmystory/auth">
              <img
                className="boostrapbasic"
                src="data:image/jpeg;base64,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"
                alt="WorkShop2020"
              />
            </Link>
            <Link to="/">
              <img
                className="boostrap"
                src="data:image/jpeg;base64,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"
                alt="WorkShop2020"
              />
            </Link>
          </div>

          <Link to="/searchthebookclub/home">
            <button onClick={(e) => handleClick(e)}> Let's Explore Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Authorization;