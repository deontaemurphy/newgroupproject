import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const Search = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
  };
  return (
    <div>
      <div class="text-center">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <Link to="/searcthebook">
              <span className="navbar-brand mb-0 h1">"Home"</span>
            </Link>
            <Link to="/auth/searchingthebookclub/home">
              <span className="navbar-brand mb-0 h1">"Look It Up"</span>
            </Link>

            <Link to="/auth/search/thebookclub/home">
              <button ocClick={(e) => handleClick(e)}>Espanol</button>
            </Link>
          </div>
        </nav>
        <a href="https://writer.com/product/api/">
          <b>https://writer.com/product/api/</b>
        </a>
        <div className="ml-auto">
          <hr></hr>
          <div className="SherlockHolmes">
            <p>About ME</p>
            <hr></hr>
            <input placeholder="Reloj" size="115;"></input>
            <p>In the "About me section"</p>
            <hr></hr>
          </div>
        </div>
        <div>
          {" "}
          <iframe
            width="560"
            height="202"
            src="https://www.bandlab.com/embed/?id=a24f825a-3c22-ee11-a9bb-000d3a41e8b8"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <hr />
        </div>
        <iframe
          width="560"
          height="202"
          src="https://www.bandlab.com/embed/?id=0c397c8a-f22a-ee11-a9bb-000d3a41e8b8"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <hr></hr>
        <p>
          Entusiasta sustantivo
          <hr></hr>
        </p>
        <p>
          1. una persona que está muy interesada en una actividad o tema en
          particular:
        </p>
        <hr></hr>
        Please do not share your personal information with others
      </div>
    </div>
  );
};

export default Search;
