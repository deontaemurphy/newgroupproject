import React from "react";
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
      navigate("/thebookclub");
    }
  }, [store.token]);
  return (
    <div>
      <h1>Spolighted Books</h1>
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
};
export default Authorization;
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  );
};
