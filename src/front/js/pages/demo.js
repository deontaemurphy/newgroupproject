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
    <div className="open">
      <div className="card">
        <h1 className="display-4">Start The Book Club Exclusive Reading</h1>

        <div className="card-header">Featured Books</div>
        <hr></hr>
        <h1>Spolighted Books</h1>
        <hr></hr>
        <ol>
          <a>
            <li className="size">
              <label>
                <a href="https://archive.org/details/adventuresofsher00doylrich/page/300/mode/2up?ref=ol&view=theater">
                  <button>
                    <img
                      src="https://i.imgur.com/KFp3ilV.jpeg"
                      className="likkle"
                    />
                  </button>
                </a>
                The Adventure of Sherlock Holmes
              </label>
            </li>
          </a>
          <Link to="/">
            <li>Sherlock Holmes</li>
          </Link>
          <a href="https://archive.org/details/adventuresofsher00doylrich/page/n15/mode/2up?ref=ol&view=theater">
            <img src="https://i.imgur.com/KFp3ilV.jpeg" />
          </a>

          <form class="was-validated">
            <div class="mb-3">
              <label for="validationTextarea" class="form-label">
                Textarea
              </label>
              <textarea
                class="form-control"
                id="validationTextarea"
                placeholder="Required example textarea"
                required
              ></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <div class="form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="validationFormCheck1"
                required
              />
              <label class="form-check-label" for="validationFormCheck1">
                Check this checkbox
              </label>
              <div class="invalid-feedback">Example invalid feedback text</div>
            </div>

            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id="validationFormCheck2"
                name="radio-stacked"
                required
              />
              <label class="form-check-label" for="validationFormCheck2">
                Toggle this radio(It needs improvement)
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                type="radio"
                class="form-check-input"
                id="validationFormCheck3"
                name="radio-stacked"
                required
              />
              <label class="form-check-label" for="validationFormCheck3">
                Or toggle this other radio(I like the bookclub)
              </label>
              <div class="invalid-feedback">
                More example invalid feedback text
              </div>
            </div>

            <div class="mb-3">
              <select class="form-select" required aria-label="select example">
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="invalid-feedback">
                Example invalid select feedback
              </div>
            </div>

            <div class="mb-3">
              <input
                type="file"
                class="form-control"
                aria-label="file example"
                required
              />
              <div class="invalid-feedback">
                Example invalid form file feedback
              </div>
            </div>

            <div class="mb-3">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </ol>
      </div>

      <hr></hr>
      <Link to="/auth/search/thebookclub">
        <button className="button">
          <span>Follow</span>
          <b>Me</b>
        </button>
      </Link>
      <hr></hr>
      <p>Tag a layout</p>
      <br></br>

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
        <a href="https://archive.org/details/adventuresofsher00doylrich/page/300/mode/2up?ref=ol&view=theater">
          <button>
            <img src="https://i.imgur.com/KFp3ilV.jpeg" className="likkle" />
          </button>
        </a>
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
