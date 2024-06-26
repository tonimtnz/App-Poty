import { useEffect, useState } from "react";

export function useArtistData(artistID) {
  
    const [ artistInfo, setArtistInfo ] = useState()

    async function GetArtistData() {
    const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7df7b1f67bmsh10a8da2c8501afep18a063jsn606757d8d385",
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
