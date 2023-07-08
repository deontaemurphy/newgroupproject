import React from "react";


const Algolia = () => {
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
         
        <h1>Spolighted Books</h1>
          <div class="sticky-top">
          <img src="" />
            <input size="100"></input>
          
      </div>
      </div>
    );
  };
  
  export default Algolia;