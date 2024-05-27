import useSWR from "swr";
import { UserProfile } from "../pages/UserProfile";

export function FetchUserProfileData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a7ba024be4msh62972134813b622p155dfejsn4695604f06f6",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  const fetcher = (url) => fetch(url, options).then((res) => res.json());

  const { data, error } = useSWR(
    `https://spotify23.p.rapidapi.com/user_profile/?id=llues_mtnz&playlistLimit=6&artistLimit=6`,
    fetcher
  );

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <>
      <UserProfile data={data} />
    </>
  );
}
