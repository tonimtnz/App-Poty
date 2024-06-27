export function ArtistAlbumCard( {albumName, albumTracks, albumCover, albumId, albumDist}){

    return(
        <div className="artist-album-card">
            <div className="album-img-cont">
                <img src={albumCover}/>
            </div>
            <div className="artist-album-info">
                <h3>{albumName}</h3>
                <h4>Canciones: {albumTracks}</h4>
            </div>
        </div>
    )
}