import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <h1 className="display-4">
        This will log you in then display your home page{" /"}
        {store.demo[params.theid].title}
      </h1>
      <img src="https://wallpaperaccess.com/full/8011.jpg" />
      <hr className="my-4" />

      <Link to="/auth/searchthebookclub/home">
        <span className="btn btn-primary btn-lg" href="" role="button">
          
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
