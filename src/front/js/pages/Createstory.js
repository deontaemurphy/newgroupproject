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
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/demo">Drafts</Link>
            </li>
            <li>
              <a className="dropdown-item">Published</a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
            <Link to="/home">Logout</Link>
            </li>
          </ul>
        </div>
        <h3>Description</h3>
        <textarea placeholder="Create Chapter">
          Once upon a time there was two kings and they ...
        </textarea>
        <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/home">Share</Link>
  </div>
</div>
        <button type="button" className="form-control me-2 ml-100">
          Create
        </button>
      </form>
    </div>
  );
}
