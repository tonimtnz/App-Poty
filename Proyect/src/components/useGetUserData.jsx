import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export function useGetUserData() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function GetUserData(userName) {
    const url = `https://spotify23.p.rapidapi.com/user_profile/?id=${userName}&playlistLimit=9&artistLimit=10`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2feb77fca8msh6c23833207b60d5p177292jsneaf6e08cce77",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLoading(false);
      setUser(result);
    } catch (er) {
      setError(true);
      console.log(er);
    }
    console.log(user);
  }

  return { username, userData, error, loading, GetUserData };
}
