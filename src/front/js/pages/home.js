import React, { useContext } from "react";
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
      navigate("/auth/thebookclub");
    }
  }, [store.token]);
  return (
    <div className="text-center mt-5">
      <h1 className="open">The Landing Page Journey</h1>
      <span className="close"></span>

      <div className="form-control">
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
          <p class="lead">The featured book (cover)</p>
        </a>
        <hr></hr>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5m6Dpvky20Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/embed/5m6Dpvky20Y">
          <p>Children's Tab</p>
        </a>
        <hr></hr>
      </div>
    </div>
  );
};
