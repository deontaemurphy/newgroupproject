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
            <Link to="/publishmystory/auth">
              <span className="navbar-brand mb-0 h1">"Home"</span>
            </Link>
            <Link to="/auth/searchingthebookclub/home">
              <span className="navbar-brand mb-0 h1">"Look It Up"</span>
            </Link>
            <Link to="/">
              <button ocClick={(e) => handleClick(e)}>Espanol</button>
            </Link>
          </div>
        </nav>
        <a href="https://writer.com/product/api/">
          <b>https://writer.com/product/api/</b>
        </a>
        <div className="ml-auto">
          <p>About ME</p>
          <input placeholder="Reloj" size="115;"></input>
          <p>In the "About me section"</p>
        </div>
        <iframe
          width="560"
          height="202"
          src="https://www.bandlab.com/embed/?id=0c397c8a-f22a-ee11-a9bb-000d3a41e8b8"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p>
          Entusiasta sustantivo 
          <br></br>
        </p>
        <p>
          1. una persona que está muy interesada en una
          actividad o tema en particular:
        </p>
        <hr></hr>
        Please do not share your personal information with others
      </div>
    </div>
  );
};

export default Search;
