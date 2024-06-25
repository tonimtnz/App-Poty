import { useEffect, useState } from "react";

export function useArtistData(artistID) {
  
    const [ artistInfo, setArtistInfo ] = useState()

    async function GetArtistData() {
    const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "45933ff01amsh2e634ad30de7456p10ec3ajsn8cb7556dbdd5",
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

    useEffect(() => {
        GetArtistData()
    }, [artistID])
  return { artistInfo, GetArtistData }
}
