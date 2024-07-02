import { LogoHeader } from "../components/header/LogoHeader";
import { HeaderUserSearch } from "../components/header/HeaderUserSearch";
import { UserSettings } from "../components/header/UserSettings";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchUserMiniButton } from "../components/header/SearchUserMiniButton";
import { UserLogo } from "../components/header/UserLogo";
import { HomeLogo } from "../components/header/HomeLogo";
import { PlaylistLogo } from "../components/header/PlaylistLogo";
import { RecomendLogo } from "../components/header/RecomendLogo";
import { FriendsLogo } from "../components/header/FriendsLogo";
import { MiniLogoHeader } from "../components/header/MiniLogoHeader";

export function Header() {
  const navigate = useNavigate();

  function toHome() {
    navigate(`/home`);
  }

  return (
    <>
    <header>
      <div className="header-mc">
        <div className="header-mc-left">
          <a onClick={toHome} className="to-home">
            <LogoHeader /> <MiniLogoHeader/>
          </a>
          <HeaderUserSearch />
        </div>
        <div className="header-mc-right">
          <UserSettings />
          <SearchUserMiniButton />
        </div>
      </div>
    </header>
    <div className="mobile-nav-menu">
        <div className="mobile-button mobile-nav-friends-button">
          <Link><FriendsLogo/></Link>
        </div>
        <div className="mobile-button mobile-nav-recommended-button">
          <Link to="/recommend"><RecomendLogo/></Link>
        </div>
        <div className="mobile-button mobile-nav-home-button">
          <Link to="/home"><HomeLogo/></Link>
        </div>
        <div className="mobile-button mobile-nav-playlist-button">
          <Link to="/artists"><PlaylistLogo/></Link>
        </div>
        <div className="mobile-button mobile-nav-profile-button">
          <Link><UserSettings/></Link>
        </div>
      </div>
    </>
  );
}
