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
          <Link to="/searchthebookclub/home">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>

          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <Link to="//searcthebook">
              <span>
                <input placeholder="Reloj" size="100px;"></input>
              </span>
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
      <Link to="/auth/search/thebookclub/home">
        <button ocClick={(e) => handleClick(e)}>The Book Club Exclusive</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/publishmystory/auth">
        <button ocClick={(e) => handleClick(e)}>Search</button>
      </Link>
      <Link to="/">
        <input placeholder="Reloj" size="100px;"></input>
        <button ocClick={(e) => handleClick(e)}>Buscandos</button>
      </Link>
    </div>
  );
};

export default Search;
