import React from "react";

export default function Createstory() {
  return (
    <div>
      <form>
        {/* cover upload under */}
        <div></div>
        <h3>Title</h3>
        <input>Tale of Two Queens</input>
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
              <a className="dropdown-item me-4">Logout</a>
            </li>
          </ul>
        </div>
        <h3>Description</h3>
        <textarea placeholder="Create Chapter">
          Once upon a time there was two kings and they ...
        </textarea>
        <button type="button" className="form-control me-2 ml-100">
          Create
        </button>
      </form>
    </div>
  );
}
