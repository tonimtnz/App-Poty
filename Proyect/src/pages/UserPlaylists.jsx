import "../styles/UserProfile.css";
import { PlaylistCard } from "../components/PlaylistCard";
import "../styles/UserProfile.css";

export function UserPlaylists({ data }) {
  return (
    <div className="playlists_public-container">
      {data.public_playlists.map((playlistInfo, index) => {
        return <PlaylistCard key={index} playlistInfo={playlistInfo} />;
      })}
    </div>
  );
}
