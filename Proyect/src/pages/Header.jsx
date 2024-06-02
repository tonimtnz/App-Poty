import { LogoHeader } from "../components/header/LogoHeader";
import { HeaderUserSearch } from "../components/header/HeaderUserSearch";
import { UserSettings } from "../components/header/UserSettings";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { SearchUserMiniButton } from "../components/header/SearchUserMiniButton";

export function Header() {
  const navigate = useNavigate();

  function toHome() {
    navigate(`/home`);
  }

  return (
    <header>
      <div className="header-mc">
        <div className="header-mc-left">
          <a onClick={toHome} className="to-home">
            <LogoHeader />
          </a>
          <HeaderUserSearch />
        </div>
        <div className="header-mc-right">
          <UserSettings />
          <SearchUserMiniButton />
        </div>
      </div>
    </header>
  );
}
