import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div>
      <hr></hr>
      <div>
        <Link to="/auth/search/thebookclub/home">
          <button className="watson">Go somewhere</button>
        </Link>

        <div>
          <p>This is the bottom of the page. I am a publication page</p>
        </div>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  </footer>
);
