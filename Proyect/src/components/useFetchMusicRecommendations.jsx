import { useState, useEffect } from "react";

export function useFetchMusicRecommendations() {
  const [songs, setSongs] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=36&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=pop%2Crock";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d1af38e1e3msh092dd893a0dc5b6p1a17f9jsn79286d597314",
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
