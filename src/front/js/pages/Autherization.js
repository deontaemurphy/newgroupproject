import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Authorization = () => {
  const handleClick = (e) => {
    e.preventDefault();
    actions.register(email, password);
  };
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/auth/thebookclub");
    }
  }, [store.token]);
  console.log(store.token);
  if (token && token != "" && token != undefined) {
    navigate("/thebookclub");
    // }
    // Authentincate
    // if (auth === true || auth === defined || auth === "") {
    navigate("/thebookclub");
  }
  return (
    <div className="open">
      <div className="card">
        <h1 className="display-4">Start The Book Club Exclusive Reading</h1>
        <div className="card-header">Featured Books</div>
        <hr></hr>
        <h1>Spolighted Books</h1>
        <hr></hr>
        <ol>
          <a>
            <li className="size">The Adventure of Sherlock Holmes
            <img src="https://i.imgur.com/KFp3ilV.jpeg" className="likkle"/>
            </li>

          </a>
          <Link to="/">
            <li>Sherlock Holmes</li>
          </Link>
          <li>
          <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameborder="0"
                height="450"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/spongebobs-greatest-hits-from-the-nickelodeon-show/323049082"
              ></iframe>
          </li>
        </ol>
      </div>
      <div className="close">
        <a href="https://archive.org/details/adventuresofsher00doylrich/page/n15/mode/2up?ref=ol&view=theater">
          <img src="https://i.imgur.com/KFp3ilV.jpeg" />
        </a>

        <div className="card-body">
          <hr></hr>
          <h5 className="card-title">Special title treatment</h5>
          <hr></hr>
          <p className="card-text">This is a house above my book button</p>
          <h5>Throw Error!</h5>
          <div className="img-top">
            <a href="https://on.soundcloud.com/KRsbN">
              <button className="button">
                <span>Follow</span>
                <b>Me</b>
              </button>
              
              <hr></hr>
              <p>Tag a layout</p>
              <br></br>
              <iframe
                allow="autoplay *; encrypted-media *;"
                frameborder="0"
                height="150"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/lose-control-feat-ciara-fat-man-scoop/73240848?i=73240545"
              ></iframe>
            </a>
            <div className="contained"></div>
            <p>🇯🇲</p>
            <b className="it">Genre</b>
            <span>About Me Section Here</span>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameborder="12"
              height="560"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/the-unexplainable-single/1686946932"
            ></iframe>

            <Link to="/publishmystory/auth">
              <ol>
                <ul>
                  <li>List a Table</li>
                </ul>
                <li>Image Src 1</li>
              </ol>
            </Link>
            <Link to="/">
              <img
                className="boostrap"
                src="data:image/jpeg;base64,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"
                alt="WorkShop2020"
              />
            </Link>
          </div>
          <div>
            <Link to="/thebookclubhome">
              <button onClick={(e) => handleClick(e)}>
                {" "}
                Let's Explore Home
              </button>
            </Link>
          </div>
          <img
            className="boostrapbasic"
            src="data:image/jpeg;base64,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"
            alt="WorkShop2020"
          />
        </div>
      </div>
    </div>
  );
};
export default Authorization;
