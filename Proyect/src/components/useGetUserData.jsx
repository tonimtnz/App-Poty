import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export function useGetUserData() {
  const { user, setUser, logUserData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [myId, setMyId] = useState("");
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function GetUserData(userName, isLogged = false) {
    const url = `https://spotify23.p.rapidapi.com/user_profile/?id=${userName}&playlistLimit=9&artistLimit=10`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d1af38e1e3msh092dd893a0dc5b6p1a17f9jsn79286d597314",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLoading(false);
      setUser({ ...result, id: userName });
      if (isLogged) {
        logUserData({ ...result, id: userName });
      }
    } catch (er) {
      setError(true);
      console.log(er);
    }
    console.log(user);
  }

  return { username, userData, error, loading, GetUserData };
}
