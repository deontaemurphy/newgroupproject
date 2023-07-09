import React from "react";
const Authorization = () => {
  const handleClick = (e) => {
    e.preventDefault();
    actions.register(name, email, password);
  };
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/thebookclub");
    }
  }, [store.token]);
  return (
    <div>
      <h1>Spolighted Books</h1>
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">This. Is Imagination. :flag-jm:</p>
          <Link to="/thebookclubfavorites">
            <button onClick={(e) => handleClick(e)} class="btn btn-primary">
              Write Yours to match mine! :flag-us:,:flag-jm:, :flag-us:
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Authorization;
