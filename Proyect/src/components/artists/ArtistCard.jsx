
export function ArtistCard({ artistName, artistPage, artistImg, artistFollowers }){

return (
    <a target="_top" href={artistPage} className="artist-card" >
            <img src={artistImg}/>
            <div className="artist-info">
                    <h2>{artistName}</h2>
                    <h4>{artistFollowers} Seguidores</h4>
            </div>
    </a>
    )
}