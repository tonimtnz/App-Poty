import { useArtistData } from "./useArtistData"
import { ArtistInfo } from "./ArtistInfo"
export function ArtistProfile(){
    const { artistInfo } = useArtistData()

    console.log(artistInfo)
    return(
        <div className="artist-prof">
            <ArtistInfo artistData={artistInfo}/>
        </div>
    )
}