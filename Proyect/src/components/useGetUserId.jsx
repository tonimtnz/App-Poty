import { useState } from "react";

export function useGetUserId() {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");

  async function GetId() {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${user}&type=users&offset=0&limit=1&numberOfTopResults=5`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "45933ff01amsh2e634ad30de7456p10ec3ajsn8cb7556dbdd5",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setId(result.users.items[0].data.id);
    } catch (error) {
      console.log(error);
    }
  }

  return { id, setId, user, setUser, GetId };
}
