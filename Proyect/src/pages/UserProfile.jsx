import { Link } from "react-router-dom";
import { PlaylistCard } from "../components/PlaylistCard";
import { RecentArtist } from "../components/RecentArtists";
import "../styles/UserProfile.css";

export function UserProfile({ data }) {
  console.log(data);
  return (
    <>
      <div className="userProfile-container">
        <div className="img-container">
          <img className="userProfile-img" src={data.image_url} />
          <p>{`@${data.name}`}</p>
        </div>
        <div>
          <h2 className="userProfile-name">{data.name}</h2>
          <div className="userProfile-numbers-container">
            <div className="box-info followers-section">
              <h4>{data.followers_count}</h4>
              <h6>Seguidores</h6>
            </div>
            <div className="box-info following-section">
              <h4>{data.following_count}</h4>
              <h6>Siguiendo</h6>
            </div>
            <div className="box-info favoritePlaylist-section">
              <h4>{data.total_public_playlists_count}</h4>
              <h6>Playlists Favoritas</h6>
            </div>
          </div>
          <div className="scroll-section">
            <div className="link-container">
              <h2 className="subtitle-playlists">Playlists Públicas</h2>
              <Link className="enlace-userProfile">Ver Todas 👉</Link>
            </div>

            <div className="playlists_public-container">
              {data.public_playlists.slice(0, 4).map((playlistInfo, index) => {
                return <PlaylistCard key={index} playlistInfo={playlistInfo} />;
              })}
            </div>
            <div className="link-container">
              <h2 className="subtitle-playlists">Artistas más escuchados</h2>
              <Link className="enlace-userProfile">Ver Todos 👉</Link>
            </div>
            <div className="recent_artist-container">
              {data.recently_played_artists
                .slice(0, 4)
                .map((recentArtistInfo, index) => {
                  return (
                    <RecentArtist
                      key={index}
                      recentArtistInfo={recentArtistInfo}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
