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
      <div>
        <p>
          There’s a dangerous thing deep inside of me, a being that enjoys the
          pain of others. Gazing into your soul, seeking weakness; if there is
          any it will know. For years I’ve struggled to keep his violent urges
          from emerging from the depths of hell. Its strength grows as time
          passes and I fear I may be losing my handle. Many have tried to reason
          with him, every attempt being as futile as the first, ending in
          horror. This creature is not of this world, or any else, he is your
          beginning and your end. ABANDON ALL HOPE Let Me Out!!! The chants grew
          louder and louder; his rage grew stronger, bound by the chains of
          goodwill and faith; he is contained. Fear consumed me. “I promised I
          would never allow you to control me ever again. I don’t need your
          help.”{" "}
        </p>
        <hr></hr>
        <p>
          {" "}
          The Day of Acceptance is a tradition for the son of the king; this day
          is filled with much joy and many praises. It’s a day for the ages,
          feast bigger than the Rahnoki. Prince Zakar Chamber: “The sun rises in
          your favor Prince Zakar, are you ready to face your father?’ My father
          shouldn’t worry Master Serech, I’m ready.” I bow showing my teacher
          the proper respect; however, my father, King Shamus - ruler of the
          northern lands, was a great and powerful warrior, and a wiser king.
          Our nation was of the four great nations; to the south of us hailed
          the people of the claw, believing that it was the Great Rahnoki’s claw
          to carve out the lands. Father always believed this tale to be
          foolish, we all believed it be; this world was sanctioned by the Elder
          Gods of Dimorphous. Legend says that their leader faced the Rahnoki
          alone, ‘the battle was so intense it caused the lands to rise from the
          sea, and the clouds to rain mountains upon those lands.’ No one knows
          for certain, but there have been tales that the son of Lord Nior,
          ruler of the Dimorphites, has made friends with the Rahnoki. Sounds
          farfetched. Knock. Knock “Father.” There was silence; I knocked again.
          Knocks. Knocks. Again, the man stands there.{" "}
        </p>
        <iframe
          width="560"
          height="202"
          src="https://www.bandlab.com/embed/?id=7be868ce-3a2b-ee11-a9bb-000d3a41e8b8"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default PublishYourContent;
