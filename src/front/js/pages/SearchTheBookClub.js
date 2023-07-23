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
            <span className="navbar-brand mb-0 h1">"Home"</span>
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
        <button ocClick={(e) => handleClick(e)}>Searching</button>
      </Link>
      <div className="ml-auto">
        <img
          src="data:image/jpeg;base64,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"
          className="rounded float-end"
          alt="Loose Control"
        />
      </div>
    </div>
  );
};

export default Inquistivo;
