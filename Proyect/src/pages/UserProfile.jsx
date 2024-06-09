// import { Routes, Route } from "react-router-dom";
import { UserProfileLeft } from "../components/UserProfileLeft";
import { UserProfileRight } from "../components/UserProfileRight";
import "../styles/UserProfile.css";
// import { UserArtists } from "./UserArtists";
// import { UserPlaylists } from "./UserPlaylists";

export function UserProfile({ data }) {
/*   const playlistMatch = useRouteMatch({path: '/users/:userId/:playlist', exact: true})
  const artistMatch = useRouteMatch({path: '/users/:userId/:artist', exact: true})
 */ console.log(data);
  return (
    <div className="userProfile-container">
      <div className="content-container-left">
        <UserProfileLeft data={data} />
        {/* <Routes>
          <Route element={<UserProfile />}>
            <Route path=":playlists" element={<UserPlaylists />} />
            <Route path=":artistas" element={<UserArtists />} />
          </Route>
        </Routes> */}
      </div>
      <div className="content-container-right">
        <UserProfileRight data={data} /* pMatch={playlistMatch} aMatch={artistMatch} *//>
      </div>
    </div>
  );
}
