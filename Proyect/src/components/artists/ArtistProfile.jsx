import { useArtistData } from "./useArtistData"
import { ArtistInfo } from "./ArtistInfo"
import { useParams } from "react-router-dom"
import '../../styles/artistProf.css'


export function ArtistProfile(){
    const { artistID } = useParams();
    const { artistInfo } = useArtistData(artistID);

    console.log(artistInfo)
    return(
        <div className="artist-prof">
            {artistInfo && <ArtistInfo artistData={artistInfo}/>}
        </div>
    )
}