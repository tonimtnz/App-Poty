import { useState, useEffect } from "react";
import { SongCard } from "../components/SongCard";
import { InternalMusicHero } from "../components/InternalMusicHero";
import { DisclaimerNotice } from "../components/DisclaimerNotice";
import { MusicPlaceholder } from "../components/MusicPlaceholder";

export function RecommendMusic() {
  const [songs, setSongs] = useState({});
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=pop%2Crock";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a7ba024be4msh62972134813b622p155dfejsn4695604f06f6",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePlayClick = (song) => {
    setCurrentSong(song);
    setCurrentSongId(song.id);
  };

  return (
    <>
      <InternalMusicHero currentSong={currentSong} />
      <div className="content-container">
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
