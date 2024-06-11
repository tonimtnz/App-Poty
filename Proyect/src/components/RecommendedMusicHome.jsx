import { useFetchMusicRecommendations } from "./useFetchMusicRecommendations";
import { SongHorizontalCard } from "./SongHorizontalCard";
import { LoadingComp } from "./LoadingComp";
import { MusicPlaceholderHorizonal } from "./PlaceHolderHorizontal";
import "../styles/horizontalMusicHome.css";

export function RecommendedMusicHome() {
  const { songs, loading, currentSongId, handlePlayClick } =
    useFetchMusicRecommendations();

  return (
    <>
      <h2 className="title-reco-section-home">ESCUCHA TUS CANCIONES</h2>
      <div className="player-container-home">
        {currentSongId ? (
          <iframe
            className="play-song-card"
            src={`https://open.spotify.com/embed/track/${currentSongId}?utm_source=generator&autoplay=1`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ) : (
          <MusicPlaceholderHorizonal />
        )}
      </div>
      <div className="content-container-home">
        {loading ? (
          <LoadingComp />
        ) : (
          <div className="cards-container-home">
            {songs.tracks?.slice(0, 4).map((song) => {
              return (
                <SongHorizontalCard
                  key={song?.id}
                  eachSong={song}
                  onPlayClick={handlePlayClick}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
