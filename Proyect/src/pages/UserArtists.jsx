// import { Link } from "react-router-dom";
import "../styles/UserProfile.css";
import { RecentArtist } from "../components/RecentArtists";

export function UserArtists({ data }) {
  return (
    <div className="recent_artist-container">
      {data.recently_played_artists.map((recentArtistInfo, index) => {
        return <RecentArtist key={index} recentArtistInfo={recentArtistInfo} />;
      })}
    </div>
  );
}
