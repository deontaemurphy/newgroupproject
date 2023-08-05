import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    {" "}
    <Link to="/login">
      <button>Login</button>
    </Link>
    <Link to="/createUser">
      <button>Register</button>
    </Link>
    <button type="button" class="btn btn-outline-primary">
      Primary
    </button>
    <button type="button" class="btn btn-outline-secondary">
      Secondary
    </button>
    <button type="button" class="btn btn-outline-success">
      Success
    </button>
    <button type="button" class="btn btn-outline-danger">
      Danger
    </button>
    <button type="button" class="btn btn-outline-warning">
      Warning
    </button>
    <button type="button" class="btn btn-outline-info">
      Info
    </button>
    <button type="button" class="btn btn-outline-light">
      Light
    </button>
    <button type="button" class="btn btn-outline-dark">
      Dark
    </button>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          width="500"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/scooby-doo-music-from-the-motion-picture/706073180"
        ></iframe>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p></p>

          <a href="https://music.apple.com/us/album/spongebobs-greatest-hits-from-the-nickelodeon-show/323049082">
            <button class="btn btn-outline-light" type="button">
              Example button
            </button>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add borders</h2>

          <p>
            Or, keep it light and add a border for some added definition to the
            boundaries of your content. Be sure to look under the hood at the
            source HTML here as we've adjusted the alignment and sizing of both
            column's content for equal-height.
          </p>
          <button class="btn btn-outline-secondary" type="button">
            Example button
          </button>
        </div>
      </div>
    </div>
  </footer>
);
