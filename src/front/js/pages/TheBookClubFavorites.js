import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
const The_Book_Club_auth ={}
export const TheBookClubFavorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span>
              </Link>
              <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, "orange")}
              >
                Blue
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/home">
        <button className="btn btn-primary">Vide</button>
      </Link>
    </div>
  );
};
