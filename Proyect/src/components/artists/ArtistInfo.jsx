export function ArtistInfo({artistData}){


    const img =  artistData.visuals.avatarImage.sources[0].url
    const stats =  artistData.stats
    const profile = artistData.profile
    const artistColor = artistData.visuals.headerImage.extractedColors.colorRaw.hex
    console.log(artistData)
    console.log(artistColor)
    
    return(
        <div className="artist-prof-info">
            <div className="artist-banner" style={{backgroundColor : `${artistColor}`}}>
                <img src={img} />
                <div className="artist-info-cont">
                    <h2 className="artist-name">{artistData.profile.name}</h2>
                    <div className="artist-info-stats">
                        <div className="stats-info">
                            <h2>{stats.followers} Seguidores</h2>
                        </div>
                        <div className="stats-info">
                            <h2>{stats.monthlyListeners} Oyentes Mensuales</h2>
                        </div>
                        <div className="stats-info">
                            <h2>Playlists: {profile.playlists.totalCount}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}