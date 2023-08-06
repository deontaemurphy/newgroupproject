import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  };
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  // let auth = sessionStorage.getItem("token");
  // {Laura suggestes a true statement in order to fix the broken authenticator}
  // useEffect(() => {
  console.log(store.token);
  if (token && token != "" && token != undefined) {
    navigate("/thebookclub");
    // }
    // Authentincate
    // if (auth === true || auth === defined || auth === "") {
    navigate("/thebookclub");
  }
  // }, []);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/auth/searcthebook">
            <span className="navbar-brand mb-0 h1">"Casa"</span>
          </Link>

          <Link to="/auth/searchingthebookclub/home">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <Link to="/publishmystory/auth">
            <button ocClick={(e) => handleClick(e)}>Home</button>
          </Link>
        </div>
      </nav>
      <hr className="sherlock"></hr>
      <div className="watson">Welcome to The Sleep Readers</div>
      <p>Spanish Titles</p>
      <h1>I Want To Know</h1>
      <p> I am a publication form.</p>
      <form>
        <hr></hr>
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
        <button>
          
            <img src="https://i.imgur.com/KFp3ilV.jpeg" className="likkle" />
         
        </button> </a>
        <hr></hr>
        <label>
          <button>
            Click Me To {""}
            <input placeholder="register"></input>
            {"publish"}
          </button>
        </label>
      </form>
      <div className="card-header">Featured Books</div>
      <iframe
        width="560"
        height="202"
        src="https://www.bandlab.com/embed/?id=0c397c8a-f22a-ee11-a9bb-000d3a41e8b8"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <form>
        <label>
          <button>
            <p>Title</p>
            Click Me To {"view writer"}
            <input placeholder="register"></input>
            {"publish"}
          </button>
        </label>
        <br></br>
        <label>
          <button>
            <p>Singer</p>
            Click Me To {" writer"}
            <input placeholder="register"></input>
            {"publish"}
          </button>
        </label>
        <label>Genre</label>
      </form>
      <br></br>

      <div>
        <iframe
          width="560"
          height="202"
          src="https://www.bandlab.com/embed/?id=7be868ce-3a2b-ee11-a9bb-000d3a41e8b8"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <form>
          <label>
            <button>
              <p>Title</p>
              Click Me To {"view writer"}
              <input placeholder="register"></input>
              {"publish"}
            </button>
          </label>
          <br></br>
          <label>
            <button>
              <p>Singer</p>
              Click Me To {" writer"}
              <input placeholder="register"></input>
              {"publish"}
            </button>
          </label>
        </form>
        <button>Sumbit</button>
      </div>
    </div>
  );
};

export default Demo;
