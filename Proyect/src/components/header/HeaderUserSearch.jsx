import { useState } from "react";
import { ResultCard } from "./ResultCard";

export function HeaderUserSearch() {
  const [userData, setUserData] = useState();
  const [userSearch, setUserSearch] = useState("");

  async function theUserFetch() {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${userSearch}&type=users&offset=0&limit=5&numberOfTopResults=5`;
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
      setUserData(result.users.items);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchUser(e) {
    setUserSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userData) {
      console.log(userData);
    }
  }
  function handleClean() {
    setUserSearch("");
    setUserData();
    console.log("borrando info");
  }

  return (
    <form onSubmit={handleSubmit} className="header-user-search-bar">
      <input
        onChange={handleSearchUser}
        placeholder="Nombre de Usuario"
        value={userSearch}
      />
      <button onClick={theUserFetch}>Buscar</button>
      <ul className="userCard">
        {userData?.map((user, index) => {
          return (
            <ResultCard key={index} result={user} handleClean={handleClean} />
          );
        })}
      </ul>
    </form>
  );
}
