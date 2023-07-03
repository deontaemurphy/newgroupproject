import React from "react";


const The_Book_Club = () => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
  
    return (
      <div>
  
        <button
          type="button"
          class="btn btn-lg btn-danger"
          data-bs-toggle="popover"
          data-bs-title="The Readers"
          data-bs-content="And here's some amazing content. It's very engaging. Right?"
        >
          Click to toggle popover
        </button>
         
        <h1>Spolighted Books</h1>
          <div class="sticky-top">
          <img src="" />
            <input size="100"></input>
          
      </div>
      </div>
    );
  };
  