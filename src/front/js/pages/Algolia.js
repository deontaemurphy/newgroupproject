import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const SearchAlgolia = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub/home">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>

          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/auth/search/thebookclub">
              <input placeholder="Reloj" size="100px;"></input>
              <button ocClick={(e) => handleClick(e)}>Entrar</button>
            </Link>
          </div>
        </div>
      </nav>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/thebookclubhome">
        <button ocClick={(e) => handleClick(e)}>Libre</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <div class="text-center">
        <img
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiYWxnb2xpYS1icmFuZFwvZmlsZVwvYkZrVnB4ZFJBenQ2c0RXTmZ3NGcucG5nIn0:algolia-brand:KOjXQWukOtV8KHzQLORQ_RoIzND_P5xvvvths9EFPok?width=2400"
          class="rounded"
          alt="Algolia"
        />
      </div>
      <Link to="/auth/thebookclub">
        <button onClick={(e) => handleClick(e)}>Search</button>
      </Link>
    </div>
  );
};

export default SearchAlgolia;
