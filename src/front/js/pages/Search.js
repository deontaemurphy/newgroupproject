import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
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
            <Link to="/thebookclub">
             
              <button onClick={(e) => handleClick(e)}>
                <input placeholder="Reloj" size="100px;"></input>
                <button>Search</button>
              </button>
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
      <Link to="/searchthebook">
        <button onClick={(e) => handleClick(e)}>The Book Club</button>
        <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      </Link>
    </div>
  );
};

export default Search;
