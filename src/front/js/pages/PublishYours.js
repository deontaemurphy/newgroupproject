import React, { useState } from "react";

export default function Publish() {
  const [title, setTitle] = useState();
  const token = sessionStorage.getItem("token");
  const handleClick = (e) => {
    e.preventDefault();
    actions.register();
  };
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center vh-100">
      <form>
        <div className="box vh-100 w-100">
          {/* {* cover upload under */}
          <div></div>
          <h3 className="">Title</h3>
          <input
            type="text"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <h3> Description</h3>
          <textarea
            cols="25"
            rows="25"
            placeholder="Add descrption here"
          ></textarea>
          <div>
            <button
              onClick={(e) => handleClick(e)}
              type="button"
              className="btn-grad rounded-pill"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
