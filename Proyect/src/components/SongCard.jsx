import "../styles/SongCard.css";

export function SongCard({ eachSong }) {
  function shortSongName(songName, maxLong) {
    return songName.length > maxLong
      ? `${songName.slice(0, maxLong - 3)}...`
      : songName;
  }

  const songImg = eachSong.album.images[1].url;
  const songName = eachSong.name;
  const songArtist = eachSong.album.artists[0].name;

  const shortSongNameDisplay = shortSongName(songName, 40);
  return (
    <div className="card">
      <div className="img-btn-section">
        <img className="song-img" src={songImg} />
        <button className="playBtn">Play</button>
      </div>
      <section className="content-section">
        <h4>{shortSongNameDisplay}</h4>
        <h5>{songArtist}</h5>
      </section>
    </div>
  );
}
