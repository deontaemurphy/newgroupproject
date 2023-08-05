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
        <div className="pad">
          <Link to="/searchthebookclub">
            <button className="nav1" ocClick={(e) => handleClick(e)}>
              Ofrecido en español
            </button>

            <span className="nav">"Home"</span>
          </Link>
          <div class="dropdown">
            <button
              className="margin-left"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              
              <li>
                <Link to="/publishmystory/auth">
                  <button ocClick={(e) => handleClick(e)}>
                    The Book Club Exclusive
                  </button>
                </Link>
              </li>
             
              <li>
                <a class="dropdown-item" href="#"></a>
              </li>
            </ul>
          </div>
          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <input className="theo" placeholder="Clock" size="100px;"></input>
          </div>
        </div>
      </nav>
      <span>
        ‘You see, but you do not observe. The distinction is clear. For example,
        you have frequently seen the steps which lead up from the hall to this
        room.” “ Frequently.” “ How often ?”’ “Well, some hundreds of times.”
        “Then how many are there ?” “How many? I don’t know.” “Quite so! You
        have not observed. And yet you have seen, ‘That is just my point. Now, I
        know that there are seventeen steps, because I have both seen and
        observed. Bythe-way, since you are interested in these little problems,
        and since you are good enough to chronicle one or two of my trifling
        experiences, you may be interested in this.” He threw over a sheet of
        thick, pink-tinted note-paper which had been lying open upon the table.
        “It came by the last post,’ said he. “ Read it aloud.” The note was
        undated, and without either signature or address. “There will call upon
        you to-night, at a quarter to eight o'clock,” it said, “‘a gentleman who
        desires to consult you upon a matter of the very deepest moment. Your
        recent services to one of the royal houses of Europe have shown that you
        are one who may safely be trusted with matters which are of an
        importance which can hardly be exaggerated.
        <b>
          This account of you we have from all quarters received. Be in " "man
          or Russian could not have written that. It is the German who is so
          uncourteous to his verbs. It only remains, therefore, to discover what
          is wanted by this German who writes upon Bohemian paper, and prefers
          wearing a mask to showing his face. And here he comes, if I am not
          mistaken, to resolve all our doubts.” As he spoke there was the sharp
          sound of horses’ hoofs and grating wheels against the curb, followed
          by a sharp pull at the bell. Holmes whistled. “A pair, by the sound,”
          said he. “Yes,” he continued, glancing out of the window. “A nice
          little brougham and a pair of beauties. A hundred and fifty guineas
          apiece.
        </b>
        <input
          type="text"
          placeholder="page 4"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        ></input>
        <hr></hr>
        Welcome to the Scavenger Hunt
        <a href="https://archive.org/details/adventuresofsher00doylrich/page/8/mode/2up?ref=ol&view=theater">
          <button ocClick={(e) => handleClick(e)} className="pick">
            Entrar
          </button>
        </a>
        <ol>
          <li>
            <a href="https://archive.org/details/adventuresofsher00doylrich/page/4/mode/2up?ref=ol&view=theater">
              page 4
            </a>
          </li>
          Here you have to search for the site words listed in the exclusive
          book of the month.
          <li className="sherlock">Or Create Your Own Adventure</li>
        </ol>
        Each Sherlock Holmes En·thu·si·ast is invited "hmmmm, ... ... It's
        included to find a ingles definition "<br></br>
        <b>Enthusiast</b>
        <br></br>
        <b className="colors">noun</b>
        <br></br>
        1. a person who is very interested in a particular activity or subject:
        <hr></hr>
        <p className="watson">
          Nothing follws until the Scavenger Hunt Timer begins{" "}
        </p>{" "}
        There’s{" "}
        <input
          type="text"
          placeholder="page 5"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        ></input>
        {"money "}
        in this case, Watson, if there is nothing else.” “J think that I had
        better go, Holmes.” “Not a bit, doctor. Stay where you are. I am lost
        without my Boswell. And this promises to be interesting. It would be a
        pity to miss it.” “ But your client —” “Never mind him. I may want your
        help, and so may he. Here he comes. Sit down in that arm-chair, doctor,
        and give us your best attention.” A slow and heavy step, which had been
        heard upon the stairs and in the passage, paused immediately outside the
        door. Then there was a loud and authoritative tap. “Come in!” said
        Holmes. : A man entered who could hardly have been less than six feet
        six inches in height, with the chest and limbs of a Hercules. His dress
        was rich with a richness which would, in England, be looked upon as akin
        to bad taste. Heavy bands of Astrakhan were slashed across the sleeves
        and fronts of his double-breasted coat, while the deep blue cloak which
        was. thrown over his shoulders was lined with flamecolored silk, and
        secured at the neck with a brooch which consisted of a single flaming
        beryl. Boots which extended half-way up his calves, and which were
        trimmed at the tops with rich brown fur, completed the impression of
        barbaric"
      </span>
    </div>
  );
};

export default Search;
