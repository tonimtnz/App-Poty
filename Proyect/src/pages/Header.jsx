import { LogoHeader } from "../components/header/LogoHeader";
import { HeaderUserSearch } from "../components/header/HeaderUserSearch";
import { UserSettings } from "../components/header/UserSettings";
import "../styles/header.css"
import { useNavigate } from "react-router-dom";



export function Header() {

  const navigate = useNavigate()

  function toHome(){
    navigate(`/`)
  }

  return (
    <header>
        <div className="header-mc">
        <div className="header-mc-left">
          <a onClick={toHome} className="to-home"><LogoHeader/></a>
          <HeaderUserSearch/>
        </div>
        <div className="header-mc-right">
        <UserSettings/>
        </div>
        </div> 
    </header>
  )
}