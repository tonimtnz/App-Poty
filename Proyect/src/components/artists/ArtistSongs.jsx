import { ArtistSongCard } from "./ArtistSongCard"

export function ArtistSongs({ songs }){


    return(
        <div className="artist-songs-cont">
            <h2>Canciones más populares</h2>
            {songs?.map((song) => {
                return(
                    <ArtistSongCard
                        key={song.track.uri}
                        songName={song.track.name}
                        songId={song.track.id}
                        songReps={song.track.playcount}
                        songImg={song.track.album.coverArt.sources[0].url}
                        songTime={song.track.duration.totalMilliseconds / 1000}
                    />
                    )
            })}

        </div>
        
    )
}