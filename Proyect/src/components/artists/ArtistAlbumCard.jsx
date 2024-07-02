export function ArtistAlbumCard({
  albumName,
  albumTracks,
  albumCover,
  albumId,
  albumDist,
}) {
  return (
    <div className="artist-album-card">
      <img src={albumCover} />
      <div className="artist-album-info">
        <h3>{albumName}</h3>
      </div>
    </div>
  );
}
