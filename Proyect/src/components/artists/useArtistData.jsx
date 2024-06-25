import { useState } from "react";

export function useArtistData(artistID) {
  
    const [ artistInfo, setArtistInfo ] = useState()

    async function GetArtistData() {
    const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d1af38e1e3msh092dd893a0dc5b6p1a17f9jsn79286d597314",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setArtistInfo(result.data.artist);
      console.log(artistInfo)
    } catch (error) {
        console.error(error);
    } 
}

  return { artistInfo, GetArtistData }
}
