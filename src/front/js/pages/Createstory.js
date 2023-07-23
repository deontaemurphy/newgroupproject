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
        <img
          src="data:image/jpeg;base64,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J4krMXxTjXGPRGe3U22+eTZEtaNV32us13OBrGtbEtvy6XzhebGDhjJWtPJ1hArsE/Yknv51T9fSoumLeWWVa66qO2EsL8Ea0foFzbM+z1CHQ511wwBa8RMTgYe4RvC1bNRXARz7D/BPf8qpwvqOmD6o5Xq7q87ZYz1I7q5oN9mc+XBwcMw27jeJi7eOEHOd6kS+L6pxgorCKJzlOTlLqzptLC5jgMyCB2hV9V1FeHEgudMnBjIn6MmqD2wrHRRnWpdSyq+dTzB4IHYdTn06jKrTeILQWFrWwOcY5zrwe6SLmAU8RF2Faj0I23Tte6byyH6X1WdWrPq34LsALgdgCSM3txx8Atfa9RajmPDKoDiDdlkAmDAJFQwJzgKwEUPAjnJdHW3qO1S5Yx6dDErUXGi5g84sLRxuxnxUOOoxlzudm84ujmxm4kxPODCSp4ilKuMnlldWonVnY8ZINo/VqpTr0ql0kNeCSQ1oAuuEiKjiTjEelNJaqPfVqVcSXOJDQ1pAEmDJqNxxU5RQ8BYxlk/q7d+/PMrm1amVXsc1pc0lrgOi2ASCASeeJzjJTqlRPMtYcHXA045G6AcVlr6pQqjFNL1I3aiy1pzecEAbqI4SDUBJJN7mhtJMfKic84CztE6pOoV6dXnGvuk9EMLIBpvE+c68ZcMMNp2KYouKiKeSyeuvnFwcuT7ET0xqma1Y1W1QyW3XNLL0wSQQbwjOOxay26iVHMe1tZglpAHNEYlpAl3OGBJ3ZKfouuiD9BHXXqOxS5Yx6HGmIAHUPQuaIrTIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/Z"
          class="rounded"
          alt="IronMan"
        />
      </div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>
          <div className="ml-auto">
            <input placeholder="Reloj" size="115;"></input>
          </div>
          <Link to="/auth/searchingthebookclub/home">
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
      <Link to="/publishmystory/auth">
        <button ocClick={(e) => handleClick(e)}>Publish</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/auth/searcthebook">
        <button ocClick={(e) => handleClick(e)}>Search</button>
      </Link>
    </div>
  );
};

export default Search;
