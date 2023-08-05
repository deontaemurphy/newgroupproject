import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Jumbotron2 = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <div>
      <div class="container py-4">
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
            href="https://dashboard.algolia.com/apps/7VW33R3U8I/dashboard"
          >
            The BookClub's Monthly Pick
          </a>
        </li>
        <li className="page-item">
          <Link to="/auth/searchthebookclub">
            <span
              className="page-link"
              href="https://archive.org/details/adventuresofsher00doylrich/page/4/mode/2up?ref=ol&view=theater"
            >
              1
            </span>
          </Link>
        </li>
        <li className="page-item">
          <Link to="/thebookclub">
            <span
              className="page-link"
              href="https://archive.org/details/adventuresofsher00doylrich/page/4/mode/2up?ref=ol&view=theater"
            >
              2
            </span>
          </Link>
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
       
        <footer class="pt-3 mt-4 text-body-secondary border-top">© 2023</footer>
      </div>
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" Steven Ferguson "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
      </p>{" "}
    </div>
  );
};
