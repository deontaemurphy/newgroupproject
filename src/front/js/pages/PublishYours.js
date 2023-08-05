import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PublishYourContent = () => {
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
    <div className="text-center mt-5">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="ml-auto">
            <div>
              <button className="btn btn-primary">
                <Link to="/thebookclubhome">
                  <button onClick={(e) => handleClick(e)}>The Book Club</button>
                </Link>
              </button>
            </div>
            <Link to="/auth/searcthebook">
              <a href="https://3000-doctorine06-newgrouppro-bvmcmo3525y.ws-us101.gitpod.io/searchthebookclub">
                <button onClick={(e) => handleClick(e)}>Espanol</button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div>Sherlock Holmes:</div>
      <div>
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
        </a>
      </div>
      <div>
        6 ADVENTURES OF SHERLOCK HOLMES must be dull, indeed, if I do not
        pronounce him to be an active member of the medical profession.” I could
        not help laughing at the ease with which he explained his process of
        deduction. “When I hear you give your reasons,” I remarked, “the thing
        always appears to me to be so ridiculously simple that I could easily do
        it myself, though at each successive instance of your reasoning I am
        baffled, until you explain your process. And yet I believe that my eyes
        are as good as yours.” “Quite so,” he answered, lighting a cigarette,
        and throwing himself down into an arm-chair. ‘You see, but you do not
        observe. The distinction is clear. For example, you have frequently seen
        the steps which lead up from the hall to this room.” “ Frequently.”
      </div>
      <br></br>
      <div className="colores">The Tale Of Two Kings by Steven Ferguson</div>
      <br></br>
      
    </div>
  );
};

export default PublishYourContent;
