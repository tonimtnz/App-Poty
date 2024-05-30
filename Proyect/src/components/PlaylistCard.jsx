import "../styles/UserProfile.css";

export function PlaylistCard({ playlistInfo }) {
  function getImageId(playlistInfo) {
    const partes = playlistInfo.image_url.split(":");
    const ids = partes.slice(2).join("");
    return ids;
  }

  const image_id = getImageId(playlistInfo);

  return (
    <>
      <div className="playlist-card">
        {image_id && <img
          className="img-playlist"
          src={
            image_id.length > 22
              ? `https://mosaic.scdn.co/300/${image_id}`
              : `https://i.scdn.co/image/${image_id}`
          }
        />}
        <h4>{playlistInfo.name}</h4>
      </div>
    </>
  );
}
