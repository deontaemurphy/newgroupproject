import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    const handleClick = (e) => {
      e.preventDefault();
      actions.logout();
      navigate("/");
      actions.checkForToken();

return(<nav className="navbar navbar-light bg-light">
<div className="container">
  <Link to="/searchthebookclub">
    <span className="navbar-brand mb-0 h1">"Home"</span>
  </Link>
  <div className="ml-auto">
    <Link to="/searchthebook">
      <button className="btn btn-primary">Search</button>
    </Link>
  </div>
</div>
</nav>
);
};
};
export default Logout;
