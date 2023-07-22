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
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>
          <div className="ml-auto">
            <input placeholder="Reloj" size="115;"></input>
          </div>
          <Link to="/auth/search/thebookclub">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <Link to="/auth/thebookclub">
            <button ocClick={(e) => handleClick(e)}>Home</button>
          </Link>
        </div>
      </nav>
      <input
        type="text"
        size="2500"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/">
        <button onClick={(e) => handleClick(e)}>Publish</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/auth/thebookclub">
        <button onClick={(e) => handleClick(e)}>Search</button>
      </Link>
    </div>
  );
};

export default Search;
