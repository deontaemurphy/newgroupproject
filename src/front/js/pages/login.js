import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };
  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  // let auth = sessionStorage.getItem("token");
  // {Laura suggestes a true statement in order to fix the broken authenticator}
  // useEffect(() => {
  console.log(store.token);
  if (token && token != "" && token != undefined) {
    navigate("/auth/buscandoclubllibro/vide/auth/search/thebookclub/home");
    // }
    // Authentincate
    // if (auth === true || auth === defined || auth === "") {
   
  }
  // }, []);
  return (
    <div class="jumbotron">
      <p>Please go home</p>

      <p class="lead">This is the bottom of my login page</p>
      <hr class="my-4" />
      <p className="leadme">
        <Link to="/createUser">
          <span class="btn btn-primary btn-lg" role="button">
            Home
          </span>
        </Link>
        <button>
          <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home"></Link>
        </button>
      </p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={(e) => handleClick(e)}>Login</button>

      <h1 className="display-4">Hola,mundo!</h1>

      <div>
        <button
          type="button"
          className="watson"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Login
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  <hr></hr>
                </div>
                <div class="modal-footer">
                  <Link to="/login">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
