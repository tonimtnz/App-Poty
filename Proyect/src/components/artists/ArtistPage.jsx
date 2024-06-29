import { useContext } from "react"
import { UserContext } from "../../context/userContext";
import { ArtistCard } from "./ArtistCard";

export function ArtistPage(){

    const {user, setUser, logUserData} = useContext(UserContext)

    return(
        <div className="artists-section">
            <div className="the-fav-artists-cont">
                <h2>Artistas favoritos de {user.name}</h2>
                <div className="the-fav-artists">
                    {user.recently_played_artists?.map((artist) => {
                        return (
                            <ArtistCard
                            key={artist.uri}
                            artistName={artist.name}
                            artistPage={artist.uri}
                            artistImg={artist.image_url}
                            artistFollowers={artist.followers_count}
                            />
                        )
                    })}
                </div>
            </div>
        </div>  
    )
}