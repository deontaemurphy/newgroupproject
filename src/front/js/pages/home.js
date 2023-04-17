import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return ( 
    <div className="container">
      <div>
        <div className="homeContainer"> 
        {/* unsure what goes here figure out with team */}
        <div className="innerHomeContainer">
          <h3 className="homeCat">New</h3>
          <ul className="homeList">
            <li className="homeStories"> </li>
            <li className="homeStories"> </li>
            <li className="homeStories"> </li>
          </ul>
        </div>
        <div className="innerHomeContainer">
          <h3 className="homeCat">Popular</h3>
          <ul className="homeList">
            <li className="homeStories"> </li>
            <li className="homeStories"> </li>
            <li className="homeStories"> </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};
