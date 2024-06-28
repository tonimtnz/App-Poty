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
        "X-RapidAPI-Key": "b056a64e6fmsh46a8aeb04e6120ap1dba19jsnb66686543229",
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
