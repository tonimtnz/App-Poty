import { useArtistData } from "./useArtistData"
import { ArtistInfo } from "./ArtistInfo"
import { useParams } from "react-router-dom"
import '../../styles/artistProf.css'
import { useEffect } from "react"


export function ArtistProfile(){
    useEffect(() => {
        GetArtistData()
    }, [])


    const { artistID } = useParams();
    const { artistInfo, GetArtistData } = useArtistData(artistID);

    console.log(artistInfo)
    return(
        <div className="artist-prof">
            {artistInfo && <ArtistInfo artistData={artistInfo}/>}
        </div>
    )
}