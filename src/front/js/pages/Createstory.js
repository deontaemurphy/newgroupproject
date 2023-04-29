import React from "react";

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
          <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="description relating to photo"/>
          <div class="card-body">
          <h5 class="card-title">Story title</h5>
          <p class="card-text">Romeo and Juiletta</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          </div>
          </div>
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
