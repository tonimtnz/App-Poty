import { Link } from "react-router-dom";
import "../styles/UserProfile.css";

export function UserProfileLeft({ data }) {
  return (
    <>
      <img className="userProfile-img" src={data.image_url} />
      <h4 className="user-title">Perfil de Usuario</h4>
      <h2 className="userProfile-name">{data.name}</h2>
      <div className="btns-info">
        <Link>
          <button className="special-btn">Todas las playlists públicas</button>
        </Link>
        <Link>
          <button className="special-btn">Los artistas más escuchados</button>
        </Link>
      </div>
    </>
  );
}
