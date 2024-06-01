import "../styles/SongCard.css";

export function InternalMusicHero({ currentSong }) {
  return (
    <>
      <div className="music-hero">
        <h2 className="reco-title">RECOMENDACIONES</h2>
        {currentSong && (
          <p>
            Estás escuchando <span>{currentSong.name}</span>
          </p>
        )}
      </div>
    </>
  );
}
