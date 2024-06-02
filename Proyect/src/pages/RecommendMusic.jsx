import { useFetchMusicRecommendations } from "../components/useFetchMusicRecommendations";
import { SongCard } from "../components/SongCard";
import { InternalMusicHero } from "../components/InternalMusicHero";
import { DisclaimerNotice } from "../components/DisclaimerNotice";
import { MusicPlaceholder } from "../components/MusicPlaceholder";
import { LoadingComp } from "../components/LoadingComp";

export function RecommendMusic() {
  const { songs, loading, currentSong, currentSongId, handlePlayClick } =
    useFetchMusicRecommendations();

  return (
    <>
      <InternalMusicHero currentSong={currentSong} />
      <div className="content-container">
        {loading ? (
          <LoadingComp />
        ) : (
          <div className="cards-container">
            {songs.tracks?.map((song) => {
              return (
                <SongCard
                  key={song?.id}
                  eachSong={song}
                  onPlayClick={handlePlayClick}
                />
              );
            })}
          </div>
        )}

        <div className="lateral-main-container">
          <div className="lateral-player-container">
            {currentSongId ? (
              <iframe
                className="play-song-card"
                src={`https://open.spotify.com/embed/track/${currentSongId}?utm_source=generator&autoplay=1`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            ) : (
              <MusicPlaceholder />
            )}
          </div>
          <DisclaimerNotice />
        </div>
      </div>
    </>
  );
}
