import { useState, useEffect } from "react";
import { SongCard } from "./SongCard";

export function MusicFetch() {
  const [songs, setSongs] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry";
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

  return (
    <div className="cards-container">
      {songs.tracks?.map((song) => {
        return <SongCard key={song?.id} eachSong={song} />;
      })}
    </div>
  );
}
