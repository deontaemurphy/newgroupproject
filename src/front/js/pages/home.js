import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Login from "./login.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      useNavigate("/thebookclub");
    }
  }, [store.token]);

  return (
    <div className="text-center mt-5">
      <h1>New Page Loading</h1>
      <span>
        Let's start the basic writings on how this web page was structured.
      </span>

      <div className="form-control">
        Discover (Needs to be up under The Algolia)
        <input
          className="form-control me-2 ml-100"
          placeholder=" Sherlock Holmes:
        
6 ADVENTURES OF SHERLOCK HOLMES

must be dull, indeed, if I do not pronounce him to be an active member of the medical profession.”

I could not help laughing at the ease with which he explained his process of deduction. “When I hear you give your reasons,” I remarked, “the thing always appears to me to be so ridiculously simple that I could easily do it myself, though at each successive instance of your reasoning I am baffled, until you explain your process. And yet I believe that my eyes are as good as yours.”

“Quite so,” he answered, lighting a cigarette, and throwing himself down into an arm-chair. ‘You see, but you do not observe. The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room.”

“ Frequently.”

“ How often ?”’

“Well, some hundreds of times.”

“Then how many are there ?”

“How many? I don’t know.”

“Quite so! You have not observed. And yet you have seen, ‘That is just my point. Now, I know that there are seventeen steps, because I have both seen and observed. Bythe-way, since you are interested in these little problems, and since you are good enough to chronicle one or two of my trifling experiences, you may be interested in this.” He threw over a sheet of thick, pink-tinted note-paper which had been lying open upon the table. “It came by the last post,’ said he. “ Read it aloud.”

The note was undated, and without either signature or address.

“There will call upon you to-night, at a quarter to eight o'clock,” it said, “‘a gentleman who desires to consult you upon a matter of the very deepest moment. Your recent services to one of the royal houses of Europe have shown that you are one who may safely be trusted with matters which are of an importance which can hardly be exaggerated. This account of you we have from all quarters received. Be in


        "
          size="125"
          cols="25"
          rows="25"
        />
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
        </a>
      </div>
    </div>
  );
};
