import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const Inquistivo = () => {
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
            <span className="navbar-brand mb-0 h1">"Casa"</span>
          </Link>

          <Link to="/auth/search/thebookclub">
            <span className="navbar-brand mb-0 h1">"Buscalo"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/">
              <input placeholder="Reloj" size="100px;"></input>
              <button ocClick={(e) => handleClick(e)}>Buscandos</button>
            </Link>
          </div>
        </div>
      </nav>
      <hr></hr>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <Link to="/">
        <input placeholder="The Reloj" size="100;"></input>
        <button ocClick={(e) => handleClick(e)}>Inquistivo</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/auth/searchingthebookclub/home">
        <input placeholder="Reloj" size="10;"></input>
        <button ocClick={(e) => handleClick(e)}>English</button>
      </Link>

      <hr></hr>
    </div>
  );
};

export default Inquistivo;
