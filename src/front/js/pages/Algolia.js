import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const SearchAlgolia = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub/home">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>

          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/auth/search/thebookclub">
              <input placeholder="Reloj" size="100px;"></input>
              <button ocClick={(e) => handleClick(e)}>Entrar</button>
            </Link>
          </div>
        </div>
      </nav>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/publishmystory/auth">
        <button ocClick={(e) => handleClick(e)}>Libre</button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <hr></hr>
      <p>El cuento de dos reyes Un título escrito por Steven Ferguson</p>
      <div class="text-center">
        <img
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiYWxnb2xpYS1icmFuZFwvZmlsZVwvYkZrVnB4ZFJBenQ2c0RXTmZ3NGcucG5nIn0:algolia-brand:KOjXQWukOtV8KHzQLORQ_RoIzND_P5xvvvths9EFPok?width=2400"
          class="rounded"
          alt="Algolia"
        />
      </div>
      <p>
        There’s a dangerous thing deep inside of me, a being that enjoys the
        pain of others. Gazing into your soul, seeking weakness; if there is any
        it will know. For years I’ve struggled to keep his violent urges from
        emerging from the depths of hell. Its strength grows as time passes and
        I fear I may be losing my handle. Many have tried to reason with him,
        every attempt being as futile as the first, ending in horror. This
        creature is not of this world, or any else, he is your beginning and
        your end. ABANDON ALL HOPE Let Me Out!!! The chants grew louder and
        louder; his rage grew stronger, bound by the chains of goodwill and
        faith; he is contained. Fear consumed me. “I promised I would never
        allow you to control me ever again. I don’t need your help.”
      </p>
      <Link to="/auth/thebookclub">
        <button onClick={(e) => handleClick(e)}>Search</button>
      </Link>
      <p>
        El Día de la Aceptación es una tradición para el hijo del rey; este día
        está lleno de mucha alegría y muchas alabanzas. Es un día para las
        edades, fiesta más grande que el Rahnoki. Cámara del Príncipe Zakar: "El
        sol sale a su favor, Príncipe Zakar, ¿está listo para enfrentarse a su
        padre?" Mi padre no debería preocuparse, Maestro Serech, estoy listo. Me
        inclino mostrando a mi maestro el debido respeto; sin embargo, mi padre,
        el rey Shamus, gobernante de las tierras del norte, era un gran y
        poderoso guerrero, y un rey más sabio. Nuestra nación era de las cuatro
        grandes naciones; al sur de nosotros saludó a la gente de la garra,
        creyendo que era la garra del Gran Rahnoki para tallar las tierras. Mi
        padre siempre creyó que este cuento era una tontería, todos lo creímos;
        este mundo fue sancionado por los Dioses Mayores de Dimorphous. La
        leyenda dice que su líder se enfrentó solo a los Rahnoki, "la batalla
        fue tan intensa que hizo que las tierras se levantaran del mar y las
        nubes hicieran llover montañas sobre esas tierras". Nadie lo sabe con
        certeza, pero hay historias de que los hijo de Lord Nior, gobernante de
        los dimorfitas, se ha hecho amigo de los Rahnoki. Suena descabellado.
        Golpear. Toca "Padre". Había silencio; Toqué de nuevo. Golpes. Golpes.
        Una vez más, el hombre se encuentra allí.
      </p>
    </div>
  );
};

export default SearchAlgolia;
