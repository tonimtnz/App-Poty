import useSWR from "swr";
import { useParams } from "react-router-dom";
import { UserProfile } from "../pages/UserProfile";

export function FetchUserProfileData() {
  const { userId } = useParams();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47028f098fmshf4fb8a15a006c35p162035jsnc87df19bf23a",
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
