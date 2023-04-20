import React from "react";

export default function Createstory() {
  return (
    <div>
      <form>
        {/* cover upload under */}
        <div></div>
        <h3 >Title</h3>
        <input></input>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Genre
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item active">Saved</a>
            </li>
            <li>
              <a className="dropdown-item"></a>
            </li>
            <li>
              <a className="dropdown-item">Published</a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item">Logout</a>
            </li>
          </ul>
        </div>
        <h3>Description</h3>
        <textarea placeholder="Add description here">New Html</textarea>
        <button type="button" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
