export function HeaderUserData({userImg, userName}){

    return(
        <div className="header-mc-user-menu-data">
            <div className="menu-data-user-info">
                {userImg && <img src={userImg}/>}
                {userName && <h2>{userName}</h2>}
            </div>
            <div className="menu-data-user-props">
                <h4>Mis canciones favoritas</h4>
                <h4>Mis playlists</h4>        
                <h4>Mis amigos</h4>
            </div>
            <hr></hr>
            <div className="menu-data-user-props">
                <h4>Settings</h4>
                <h4>Logout</h4>
            </div>
        </div>
    )
}