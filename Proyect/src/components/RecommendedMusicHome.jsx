import { useFetchMusicRecommendations } from "./useFetchMusicRecommendations";
import { SongHorizontalCard } from "./SongHorizontalCard";
import { LoadingComp } from "./LoadingComp";
import { MusicPlaceholderHorizonal } from "./PlaceHolderHorizontal";
import "../styles/horizontalMusicHome.css";

export function RecommendedMusicHome() {
  const { songs, loading, currentSong, currentSongId, handlePlayClick } =
    useFetchMusicRecommendations();

  return (
    <>
      <h2 className="title-reco-section-home">ESCUCHA TUS CANCIONES</h2>
      <div className="player-container-home">
        {currentSongId ? (
          <iframe
            style="border-radius:12px"
            src={`https://open.spotify.com/embed/track/${currentSong}utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
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
