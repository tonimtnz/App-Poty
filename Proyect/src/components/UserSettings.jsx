import { UserLogo } from "./UserLogo";
import { HeaderUserSettings } from "./HeaderUserSettings"

export function UserSettings(){

    function handleShowSettigns(){
        const headerHiddenMenu = document.getElementsByClassName('header-mc-hidden')
        headerHiddenMenu.className = 'header-mc-shown'
    }

    return(
        <div>
            <HeaderUserSettings/>
            <button onClick={handleShowSettigns} id="user-button"><UserLogo/></button>
        </div>
    )
}