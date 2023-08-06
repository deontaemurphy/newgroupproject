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
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  }
  return (
    <div className="open">
      <div className="card">
        <h1 className="display-4">
          Comienza el Club del Libro Lectura Exclusiva
        </h1>

        <div className="card-header">Libros destacados</div>
        <hr></hr>
        <h1>Libros estropeados</h1>
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
                La aventura de Sherlock Holmes
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
                área de texto
              </label>
              <textarea
                class="form-control"
                id="validationTextarea"
                placeholder="Required example textarea"
                required
              ></textarea>
              <div class="invalid-feedback">
                Por favor ingrese un mensaje en el área de texto.
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
                Marque esta casilla de verificación
              </label>
              <div class="invalid-feedback">
                Ejemplo de texto de comentario no válido
              </div>
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
                Alternar esta radio (si necesita mejoras)
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
                O cambia esta otra radio (me gusta el club de lectura)
              </label>
              <div class="invalid-feedback">
                Más ejemplos de texto de comentario no válido
              </div>
            </div>

            <div class="mb-3">
              <select class="form-select" required aria-label="select example">
                <option value="">Abrir este menú de selección</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
              </select>
              <div class="invalid-feedback">
                Ejemplo de comentarios de selección no válidos
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
                Ejemplo de comentario de archivo de formulario no válido
              </div>
            </div>

            <div class="mb-3">
              <button class="btn btn-primary" type="submit">
                Enviar formulario
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
    </div>
  );
};
export default Authorization;
