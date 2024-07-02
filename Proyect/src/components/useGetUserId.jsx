import { useState } from "react";

export function useGetUserId() {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");

  async function GetId() {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${user}&type=users&offset=0&limit=1&numberOfTopResults=5`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b056a64e6fmsh46a8aeb04e6120ap1dba19jsnb66686543229",
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
