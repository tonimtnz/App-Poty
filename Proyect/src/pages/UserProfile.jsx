import { PlaylistCard } from "../components/PlaylistCard";
import "../styles/UserProfile.css";

export function UserProfile({ data }) {
  console.log(data);
  return (
    <>
      <div className="userProfile-container">
        <div>
          <img className="userProfile-img" src={data.image_url} />
        </div>
        <div>
          <h2 className="userProfile-name">{data.name}</h2>
          <div className="userProfile-numbers-container">
            <div className="box-info followers-section">
              <h4>{data.followers_count}</h4>
              <h6>Seguidores</h6>
            </div>
            <div className="box-info following-section">
              {" "}
              <h4>{data.following_count}</h4>
              <h6>Siguiendo</h6>
            </div>
            <div className="box-info favoritePlaylist-section">
              <h4>{data.total_public_playlists_count}</h4>
              <h6>Playlists Favoritas</h6>
            </div>
          </div>
          <h2 className="subtitle-playlists">Playlists Públicas</h2>
          <div className="playlists_public-container">
            {data.public_playlists.map((playlistInfo, index) => {
              return <PlaylistCard key={index} playlistInfo={playlistInfo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
