
import React, { useState } from "react";

export default function Publish() {
  const [story, setStory] = useState();
  const token = sessionStorage.getItem("token");
  return (
    <div className=" whole-screen d-flex justify-content-center align-items-center vh-100">
      <form>
        <div className="box vh-100 w-100">
          {/* {* cover upload under */}
          <div></div>
          <h3 className="">Title</h3>
          <input></input>

          <h3> Description</h3>
          <textarea placeholder="Add descrption here"></textarea>
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
