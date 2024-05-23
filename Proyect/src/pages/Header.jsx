import { LogoHeader } from "../components/LogoHeader";
import { HeaderUserSearch } from "../components/HeaderUserSearch";
import { UserSettings } from "../components/UserSettings";
import "../styles/header.css"



export function Header() {

  return (
    <header>
        <div className="header-mc">
        <div className="header-mc-left">
          <LogoHeader/>
          <HeaderUserSearch/>
        </div>
        <div className="header-mc-right">
        <UserSettings/>
        </div>
        </div> 
    </header>
  )
}
