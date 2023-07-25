import react from "react";

const ProfileImport = () => {
  let Profile = "profile,setProfile";
  return (
    <nav className="navbar navbar-light bg-light">
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

export default ProfileImport;
