import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div>
      <div>
        <Link to="/auth/search/thebookclub/home">
          <button className="watson">Go somewhere</button>
        </Link>

        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          width="500"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/scooby-doo-music-from-the-motion-picture/706073180"
        ></iframe>

        <div>
          <p>This is the bottom of the page. I am a publication page</p>
          <iframe
            width="560"
            height="202"
            src="https://www.bandlab.com/embed/?id=7be868ce-3a2b-ee11-a9bb-000d3a41e8b8"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>

    <a href="https://music.apple.com/us/album/spongebobs-greatest-hits-from-the-nickelodeon-show/323049082">
      <button class="btn btn-outline-light" type="button">
        Example button
      </button>
    </a>

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
  </footer>
);
