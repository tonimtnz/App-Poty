import { useEffect, useState } from "react";

export function useArtistData(artistID) {
  
    const [ artistInfo, setArtistInfo ] = useState()

    async function GetArtistData() {
    const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistID}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b056a64e6fmsh46a8aeb04e6120ap1dba19jsnb66686543229",
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
