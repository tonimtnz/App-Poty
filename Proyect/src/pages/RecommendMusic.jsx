import { useFetchMusicRecommendations } from "../components/useFetchMusicRecommendations";
import { SongCard } from "../components/SongCard";
import { InternalMusicHero } from "../components/InternalMusicHero";
import { DisclaimerNotice } from "../components/DisclaimerNotice";
import { MusicPlaceholder } from "../components/MusicPlaceholder";
import { LoadingComp } from "../components/LoadingComp";

export function RecommendMusic() {
  const {
    songs,
    loading,
    currentSong,
    currentSongId,
    handlePlayClick,
    selectedGenre,
    setSelectedGenre,
  } = useFetchMusicRecommendations();

  const genreList = [
    "pop",
    "rock",
    "metal",
    "alternative",
    "indie",
    "classical",
    "salsa",
    "latin",
    "country",
    "anime",
  ];

  const handleGenreClick = (event, genre) => {
    event.preventDefault();
    setSelectedGenre(genre);
  };

  return (
    <>
      <InternalMusicHero currentSong={currentSong} />
      <div className="content-container">
        {loading ? (
          <LoadingComp />
        ) : (
          <div className="cards-container-padre">
            <div className="genre-btn-container">
              <ul className="genre-btns-container">
                {genreList.map((genre) => {
                  return (
                    <li
                      key={genre}
                      className={selectedGenre === genre ? "selected" : ""}
                      onClick={(event) => handleGenreClick(event, genre)}
                    >
                      <a href="#">{genre}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
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
