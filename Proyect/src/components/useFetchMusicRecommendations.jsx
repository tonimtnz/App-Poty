import { useState, useEffect } from "react";

export function useFetchMusicRecommendations() {
  const [songs, setSongs] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("pop");

  useEffect(() => {
    const url = `https://spotify23.p.rapidapi.com/recommendations/?limit=36&seed_genres=${selectedGenre}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7df7b1f67bmsh10a8da2c8501afep18a063jsn606757d8d385",
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
  }, [selectedGenre]);

  const handlePlayClick = (song) => {
    setCurrentSong(song);
    setCurrentSongId(song.id);
  };

  return {
    songs,
    loading,
    currentSong,
    currentSongId,
    handlePlayClick,
    selectedGenre,
    setSelectedGenre,
  };
}
