import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
const Inquistivo = () => {
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
          <Link to="/auth/searchingthebookclub/home">
            <span className="navbar-brand mb-0 h1">"Casa"</span>
          </Link>

          <Link to="/auth/search/thebookclub">
            <span className="navbar-brand mb-0 h1">"Buscalo"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/auth/search/thebookclub/home">
              <button ocClick={(e) => handleClick(e)}>Buscandos</button>
            </Link>
          </div>
        </div>
      </nav>
      <hr></hr>
      <input
        type="text"
        placeholder="nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <a href="https://archive.org/details/adventuresofsher00doylrich/page/300/mode/2up?ref=ol&view=theater">
        <input placeholder="The Reloj" size="100;"></input>
        <button ocClick={(e) => handleClick(e)}>Inquistivo</button>
      </a>
      <input
        type="text"
        placeholder="libre"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      ></input>
      <Link to="/auth/searchingthebookclub/home">
        <input placeholder="Reloj" size="10;"></input>
        <button ocClick={(e) => handleClick(e)}>Ingles</button>
      </Link>
      <hr></hr>
      <p className="sherlock">
        “Ves, pero no observas. La distinción es clara. Por ejemplo, has visto
        con frecuencia los escalones que suben desde el vestíbulo hasta esta
        habitación. " Frecuentemente." "¿Con qué frecuencia?" "Bueno, algunos
        cientos de veces". "Entonces, ¿cuántos hay?" "¿Cuántos? No sé." “¡Así
        es! No has observado. Y, sin embargo, has visto: 'Ese es solo mi punto.
        Ahora, sé que hay diecisiete pasos, porque he visto y observado. Por
        cierto, dado que estás interesado en estos pequeños problemas, y dado
        que eres lo suficientemente bueno como para relatar una o dos de mis
        insignificantes experiencias, es posible que te interese esto. Arrojó
        una hoja de papel grueso, teñido de rosa, que había estado abierta sobre
        la mesa. “Llegó con el último correo”, dijo. " Léelo en voz alta." La
        nota no tenía fecha ni firma ni dirección. “Te visitará esta noche, a
        las ocho menos cuarto”, decía, “un caballero que desea consultarte sobre
        un asunto de suma importancia. Sus recientes servicios a una de las
        casas reales de Europa han demostrado que es alguien a quien se le puede
        confiar con seguridad asuntos que son de una importancia que
        difícilmente puede exagerarse.
      </p>
      <br></br>
      hay <span className="p">página 4</span> en este caso,
      <span className="watson">Watson</span> , si no hay nada más. Creo que será
      mejor que me vaya, Holmes. “Ni un poco, doctor. Quédate donde estás. Estoy
      perdido sin mi Boswell. Y esto promete ser interesante. Sería una pena
      perdérselo”. Pero su cliente... —No se preocupe por él. Puede que necesite
      tu ayuda, y él también. Ahí viene. Siéntese en ese sillón, doctor, y
      bríndenos su mejor atención. Un paso lento y pesado, que se había oído en
      las escaleras y en el pasillo, se detuvo inmediatamente frente a la
      puerta. Luego hubo un golpe fuerte y autoritario. "¡Adelante!" dijo
      Holmes. : Entró un hombre que apenas podía medir menos de seis pies y seis
      pulgadas de altura, con el pecho y las extremidades de un Hércules. Su
      vestido era rico con una ostentación que, en Inglaterra, se consideraría
      de mal gusto. Pesadas tiras de astracán estaban acuchilladas en las mangas
      y la parte delantera de su abrigo cruzado, mientras que la capa azul
      oscuro que llevaba. echado sobre sus hombros estaba forrado con seda color
      fuego, y asegurado en el cuello con un broche que consistía en un solo
      berilo llameante. Las botas que le llegaban hasta la mitad de las
      pantorrillas, y que estaban adornadas en la parte superior con un rico
      pelaje marrón, completaban la impresión de bárbaro".
    </div>
  );
};

export default Inquistivo;
