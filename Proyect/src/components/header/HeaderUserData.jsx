import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom";

export function HeaderUserData({userImg, userName}){
    const navigate = useNavigate();
    const {user, setUser }= useContext(UserContext);
    function handleLogout(){
        setUser({})
        navigate('/')
    }

    return(
        <div className="header-mc-user-menu-data">
            <div className="menu-data-user-info">
                {userImg && <img src={userImg}/>}
                {userName && <h2>{userName}</h2>}
            </div>
            <div className="menu-data-user-props">
                <a className="user-props-link">Mis canciones favoritas</a>
                <a className="user-props-link">Mis playlists</a>        
                <a className="user-props-link">Mis amigos</a>
            </div>
            <hr></hr>
            <div className="menu-data-user-props">
                <a className="user-props-link">Settings</a>
                <a className="user-props-link logout-button" onClick={handleLogout}>Logout</a>
            </div>
        </div>
    )
}