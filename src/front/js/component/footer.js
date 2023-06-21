import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
    </p>
  </footer>
);
