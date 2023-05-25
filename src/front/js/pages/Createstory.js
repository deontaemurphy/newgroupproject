import React from "react";
import { useState } from "react";
export default function Createstory() {
  const [story, setStory] = useState();
  const token = sessionStorage.getItem("token");
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center  vh-100">
      <form>
        <div className="box vh-100 w-100">
          {/* cover upload under */}
          <div></div>
          <h3 className="">Title</h3>
          <input></input>
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item active">Action</a>
              </li>
              <li>
                <a className="dropdown-item">Another action</a>
              </li>
              <li>
                <a className="dropdown-item">Something else here</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">Separated link</a>
              </li>
            </ul>
          </div> */}
          <h3>Description</h3>
          <textarea placeholder="Add description here"></textarea>
          <div>
            <button type="button" className="btn-grad rounded-pill">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
