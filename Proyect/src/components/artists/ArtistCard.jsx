import { useNavigate } from "react-router-dom";
import { useArtistData } from "./useArtistData"

export function ArtistCard({ artistName, artistPage, artistImg, artistFollowers }){
       
        const navigate =  useNavigate()
        const partes = artistPage.split(":")
        const artistID = partes.slice(2).join(""); 
        const { artistInfo, GetArtistData } = useArtistData(artistID)


        function handleLink(){
                GetArtistData()
                if( artistInfo != undefined){
                        navigate(`/artists/${artistID}`)
                        console.log(artistInfo)
                }
        }
return (
    <a onClick={handleLink} className="artist-card" >
            <img src={artistImg}/>
            <div className="artist-info">
                    <h2>{artistName}</h2>
                    <h4>{artistFollowers} Seguidores</h4>
            </div>
    </a>
    )
}