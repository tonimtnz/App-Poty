import { useState, useEffect } from "react";

export function useFetchMusicRecommendations() {
  const [songs, setSongs] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=40&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=pop%2Crock";
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
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePlayClick = (song) => {
    setCurrentSong(song);
    setCurrentSongId(song.id);
  };

  return { songs, loading, currentSong, currentSongId, handlePlayClick };
}
