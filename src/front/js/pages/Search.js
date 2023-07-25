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
            <span className="nav">"Home"</span>
          </Link>

          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <a href="https://archive.org/details/adventuresofsher00doylrich/page/8/mode/2up?ref=ol&view=theater">
              <button ocClick={(e) => handleClick(e)}>Entrar</button>
            </a>
            <input className="theo" placeholder="Clock" size="100px;"></input>
          </div>
        </div>
      
      <Link to="/publishmystory/auth">
        <button ocClick={(e) => handleClick(e)}>The Book Club Exclusive</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/">
        <button ocClick={(e) => handleClick(e)}>Search</button>
      </Link>
      <Link to="/">
        <input placeholder="Reloj" size="100px;"></input>
        <button ocClick={(e) => handleClick(e)}>Buscandos</button>
      </Link>  
      </nav>
          <span>
        "man or Russian could not have written that. It is the German who is so
        uncourteous to his verbs. It only remains, therefore, to discover what
        is wanted by this German who writes upon Bohemian paper, and prefers
        wearing a mask to showing his face. And here he comes, if I am not
        mistaken, to resolve all our doubts.” As he spoke there was the sharp
        sound of horses’ hoofs and grating wheels against the curb, followed by
        a sharp pull at the bell. Holmes whistled. “A pair, by the sound,” said
        he. “Yes,” he continued, glancing out of the window. “A nice little
        brougham and a pair of beauties. A hundred and fifty guineas apiece.
        There’s money in this case, Watson, if there is nothing else.” “J think
        that I had better go, Holmes.” “Not a bit, doctor. Stay where you are. I
        am lost without my Boswell. And this promises to be interesting. It
        would be a pity to miss it.” “ But your client —” “Never mind him. I may
        want your help, and so may he. Here he comes. Sit down in that
        arm-chair, doctor, and give us your best attention.” A slow and heavy
        step, which had been heard upon the stairs and in the passage, paused
        immediately outside the door. Then there was a loud and authoritative
        tap. “Come in!” said Holmes. : A man entered who could hardly have been
        less than six feet six inches in height, with the chest and limbs of a
        Hercules. His dress was rich with a richness which would, in England, be
        looked upon as akin to bad taste. Heavy bands of Astrakhan were slashed
        across the sleeves and fronts of his double-breasted coat, while the
        deep blue cloak which was. thrown over his shoulders was lined with
        flamecolored silk, and secured at the neck with a brooch which consisted
        of a single flaming beryl. Boots which extended half-way up his calves,
        and which were trimmed at the tops with rich brown fur, completed the
        impression of barbaric"
      </span>
      <img src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0023.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0" />
      
    </div>
  );
};

export default Search;
