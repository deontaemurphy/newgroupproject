import algoliasearch from "algoliasearch/lite";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";

const searchClient = algoliasearch(
  "PSIZSHJDSP",
  "dec39b29ff651d7927d7022f1ac8833b"
);

function Search() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="sims_irl_objects" searchClient={searchClient}>
        <div>
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}

function Hit(props) {
  const {store, actions} = useContext(Context)
  let objectInfo = {"name" : props.hit.book_names, "buy" :props.hit.buy_url, "pic":props.hit.book_pic_url, "price":props.hit.price}
  const [activeFav, setActiveFav] = useState(false);
 
  const handleClick = (e) => {
    e.preventDefault();
    if (activeFav === true) {
      // remove
      console.log('here');
      actions.removeFavorite(objectInfo)
      setActiveFav(false)
    }else{
    actions.addFavorite(objectInfo)
    setActiveFav(true);
  }}

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.hit.sims_pic_url}
        alt={props.hit.sims_name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title mt-2" style={{ height: "60px" }}>
          {props.hit.sims_name + "- " + props.hit.price}
        </h5>
        <div className="cardBottom">
          <a href={props.hit.buy_url} target="blank">
            <button className="btn btn-info mb-2">Buy Now</button>
          </a>
          <button
              onClick={(e) => handleClick(e)}
              className={activeFav ? "fas fa-heart" : "far fa-heart"}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            ></button>
   
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
