import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const Blank = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
  };
  return (
    <div>
      <div className="sherlock">Featured</div>
      <div>
        6 AVENTURAS DE SHERLOCK HOLMES debe ser aburrido, de hecho, si no lo
        hago declararlo miembro activo de la profesión médica”. I no pudo evitar
        reírse de la facilidad con la que explicaba su proceso de deducción.
        “Cuando te escucho dar tus razones,” comentó, “la cosa siempre me parece
        tan ridículamente simple que podría hacerlo fácilmente yo mismo, aunque
        en cada sucesiva ejemplo de su razonamiento estoy desconcertado, hasta
        que explique su proceso. Y, sin embargo, creo que mis ojos son tan
        buenos como los tuyos. "Así es", respondió, encendiendo un cigarrillo y
        tirándolo se sentó en un sillón. “Ves, pero no observas. La distinción
        es clara. Por ejemplo, has visto con frecuencia los escalones que
        conducen desde el vestíbulo a esta habitación. “ Frecuentemente."
      </div>
      <div className="rojo">Featured</div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/publishmystory/auth">
            <span className="navbar-brand mb-0 h1">"Casa"</span>
          </Link>

          <Link to="/Discoveryourword/book">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto"></div>
        </div>

        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar.home.theexclusive
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0-Hj_bi9Qto"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button
                  class="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inquistivo
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link to="/login">Entrar</Link>
                  </li>

                  <li>
                    <Link to="/">Sherlock Holmes</Link>
                  </li>
                  <li>
                    <Link to="/auth/searchingthebookclub/home">
                      Are you lost?
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br></br>
      <div className="colores">
        El cuento de dos reyes de Steven Ferguson
        <div>
          <h1>El cuento de dos reyes</h1>
          <p>
            Hay algo peligroso en lo más profundo de mí, un ser que disfruta del
            dolor de los demás. Mirando dentro de tu alma, buscando debilidad;
            si hay alguno lo sabrá. Durante años he luchado para evitar que sus
            impulsos violentos emergieran de las profundidades del infierno. Su
            fuerza crece a medida que pasa el tiempo y temo que pueda estar
            perdiendo el control. Muchos han tratado de razonar con él, siendo
            cada intento tan inútil como el primero, terminando en horror. Esta
            criatura no es de este mundo, ni de ningún otro, es vuestro
            principio y vuestro fin. ABANDONA TODA ESPERANZA Déjame Salir!!! Los
            cánticos se hicieron más y más fuertes; su rabia se hizo más fuerte,
            atado por las cadenas de la buena voluntad y la fe; él está
            contenido. El miedo me consumía. “Prometí que nunca permitiría que
            me controlaras nunca más. No necesito tu ayuda.
          </p>
          <hr></hr>
          <p>
            {" "}
            El Día de la Aceptación es una tradición para el hijo del rey; este
            día está lleno de mucha alegría y muchas alabanzas. Es un día para
            las edades, fiesta más grande que el Rahnoki. Cámara del Príncipe
            Zakar: "El sol sale a su favor, Príncipe Zakar, ¿está listo para
            enfrentarse a su padre?" Mi padre no debería preocuparse, Maestro
            Serech, estoy listo. Me inclino mostrando a mi maestro el debido
            respeto; sin embargo, mi padre, el rey Shamus, gobernante de las
            tierras del norte, era un gran y poderoso guerrero, y un rey más
            sabio. Nuestra nación era de las cuatro grandes naciones; al sur de
            nosotros saludó a la gente de la garra, creyendo que era la garra
            del Gran Rahnoki para tallar las tierras. Mi padre siempre creyó que
            este cuento era una tontería, todos lo creímos; este mundo fue
            sancionado por los Dioses Mayores de Dimorphous. La leyenda dice que
            su líder se enfrentó solo a los Rahnoki, "la batalla fue tan intensa
            que hizo que las tierras se levantaran del mar y las nubes hicieran
            llover montañas sobre esas tierras". Nadie lo sabe con certeza, pero
            hay historias de que los hijo de Lord Nior, gobernante de los
            dimorfitas, se ha hecho amigo de los Rahnoki. Suena descabellado.
            Golpear. Toca "Padre". Había silencio; Toqué de nuevo. Golpes.
            Golpes. Una vez más, el hombre se encuentra allí.{" "}
          </p>
          <hr></hr>
        </div>
      </div>
      <div className="rojo">Featured</div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/auth/search/thebookclub/home">
        <button ocClick={(e) => handleClick(e)}>
          Exclusivo del club de lectura
        </button>
      </Link>
      <input
        type="text"
        placeholder="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/auth/searcthebook">
        <button ocClick={(e) => handleClick(e)} className="sherlock">
          búsqueda
        </button>
      </Link>

      <div class="card text-center">
        <div class="azul">Featured</div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i6yFRXUDC-w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="azul">Featured</div>
        </div>{" "}
        <img
          src="data:image/png;base64,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"
          class="rounded mx-auto d-block"
          alt="github"
        ></img>
        <div className="rojo">Featured</div>
      </div>
      <div class="card text-center">
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0-Hj_bi9Qto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="rojo">Featured</div>
        </a>

        <img
          src="data:image/png;base64,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"
          class="rounded mx-auto d-block"
          alt="github"
        ></img>
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p className="sherlock">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pxj20DQee98"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-center mt-5">
            <nav className="navbar navbar-light bg-light">
              <div className="container">
                <div className="ml-auto">
                  <div>
                    <button className="btn btn-primary">
                      <Link to="/thebookclubhome">
                        <button onClick={(e) => handleClick(e)}>
                          El club del libro
                        </button>
                      </Link>
                    </button>
                  </div>
                  <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home">
                    <button ocClick={(e) => handleClick(e)}>Ingles</button>
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

            <br></br>
          </div>
        </div>
        <div class="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
};

export default Blank;
