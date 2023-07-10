import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link to="/searchthebookclub/home">
            <span className="page-link" href="#">
              Previous
            </span>
          </Link>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="https://archive.org/details/adventuresofsher00doylrich/page/272/mode/2up?ref=ol&view=theater"
          >
            BookClub:Page Of The Week
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="https://www.youtube.com/watch?v=JkcxEUNohC8r"
          >
            1
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="https://archive.org/details/adventuresofsher00doylrich/page/4/mode/2up?ref=ol&view=theater"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="https://www.youtube.com/watch?v=ZrxCRySeHNE"
          >
            3
          </a>
        </li>
        <li className="page-item">
          <Link to="/thebookclub">
            <span className="page-link">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
    </p>
  </footer>
);
