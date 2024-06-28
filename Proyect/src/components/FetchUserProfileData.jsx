import useSWR from "swr";
import { useParams } from "react-router-dom";
import { UserProfile } from "../pages/UserProfile";

export function FetchUserProfileData() {
  const { userId } = useParams();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b056a64e6fmsh46a8aeb04e6120ap1dba19jsnb66686543229",
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
