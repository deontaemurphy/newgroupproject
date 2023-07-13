import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
const Single = () => {
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

      <Link to="/thebookclub">
        <span className="btn btn-primary btn-lg" href="" role="button">
          Button
        </span>
      </Link>
    </div>
  );
};
return (
  <div>
    <h1>Spolighted Books</h1>
    <div className="text-center mt-5">
      <h1>New Page Loading</h1>
      <span>
        Let's start the basic writings on how this web page was structured.
      </span>

      <div className="form-control">
        Discover (Needs to be up under The Algolia)
        <input
          className="form-control me-2 ml-100"
          placeholder=" Sherlock Holmes:
      
6 ADVENTURES OF SHERLOCK HOLMES
      "
          size="125"
          cols="25"
          rows="25"
        />
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
        </a>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">This. Is Imagination. :flag-jm:</p>
        <Link to="/thebookclubfavorites">
          <button onClick={(e) => handleClick(e)} class="btn btn-primary">
            Write Yours to match mine! :flag-us:,:flag-jm:, :flag-us:
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Single;
