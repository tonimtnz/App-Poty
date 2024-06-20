import "../styles/UserProfile.css";

export function RecentArtist({ recentArtistInfo }) {
  return (
    <div className="card-artistInfo">
      <img className="artist-img" src={recentArtistInfo.image_url} />
      <h2>{recentArtistInfo.name}</h2>
      <p>{recentArtistInfo.followers_count} Seguidores</p>
    </div>
  );
}
