import { Link } from "react-router-dom";

function HomeBoton() {
  return (
    <>
      <div className="botones-del-home">
        <Link className="boton-recomendaciones" to="/recommend">
          Recomendaciones
        </Link>
        <div className="botones-inferiores">
          <button className="boton-playlist">Mis Playlists</button>
          <Link className="boton-artista" to="/artists">Artistas</Link>
        </div>
      </div>
    </>
  );
}

export default HomeBoton;
