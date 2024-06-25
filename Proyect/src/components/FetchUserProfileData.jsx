import useSWR from "swr";
import { useParams } from "react-router-dom";
import { UserProfile } from "../pages/UserProfile";

export function FetchUserProfileData() {
  const { userId } = useParams();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45933ff01amsh2e634ad30de7456p10ec3ajsn8cb7556dbdd5",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  const fetcher = (url) => fetch(url, options).then((res) => res.json());

  const { data, error } = useSWR(
    `https://spotify23.p.rapidapi.com/user_profile/?id=${userId}&playlistLimit=20&artistLimit=20`,
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
