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

      <div className="homepage">
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
          <hr></hr>
          <p class="lead">The featured book (cover)</p>
        </a>
        <hr></hr>
        <iframe
          width="370"
          height="250"
          src="https://www.youtube.com/embed/5m6Dpvky20Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/embed/5m6Dpvky20Y">
          <hr></hr>
          <p>Children's Tab</p>
          <hr></hr>
        </a>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i6yFRXUDC-w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr />
        <p>Sherlock Holmes #25:</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0-Hj_bi9Qto"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://youtu.be/0-Hj_bi9Qto">
          <p>The Empty House</p>
        </a>
        Line Leader: "On this page you can browse"
      </div>
    </div>
  );
};
