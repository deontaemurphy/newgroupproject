import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <button
      type="button"
      className="watson"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Example
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
            {" "}
            <div>
              <hr></hr>
              <div>
                <Link to="/auth/search/thebookclub/home">
                  <button className="watson">Titulo</button>
                </Link>

                <div>
                  <p>This is the bottom of the page. I am a publication page</p>
                </div>

                <Link to="/auth/search/thebookclub">
                  <button className="sherlock" type="button">
                    Title
                  </button>
                </Link>
              </div>
            </div>
            <div class="modal-footer">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
