// import { Routes, Route } from "react-router-dom";

import { UserProfileLeft } from "../components/UserProfileLeft";
import { UserProfileRight } from "../components/UserProfileRight";
import "../styles/UserProfile.css";
// import { UserArtists } from "./UserArtists";
// import { UserPlaylists } from "./UserPlaylists";

export function UserProfile({ data }) {
  console.log(data);
  return (
    <div className="userProfile-container">
      <div className="content-container">
        <UserProfileLeft data={data} />
        {/* <Routes>
          <Route element={<UserProfile />}>
            <Route path=":playlists" element={<UserPlaylists />} />
            <Route path=":artistas" element={<UserArtists />} />
          </Route>
        </Routes> */}
      </div>
      <div className="content-container">
        <UserProfileRight data={data} />
      </div>
    </div>
  );
}
