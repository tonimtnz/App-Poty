import { ArtistAlbumCard } from "./ArtistAlbumCard";
//import { ReleasesCard } from "./ReleasesCards";

export function ArtistAlbums({ albumsData }) {
  return (
    <div className="artist-albums-cont">
      <h2>Álbumes</h2>
      <div className="albums-cards-container">
        {albumsData?.map((album) => {
          return (
            <ArtistAlbumCard
              key={album.releases.items[0].uri}
              albumName={album.releases.items[0].name}
              albumTracks={album.releases.items[0].tracks.totalCount}
              albumCover={album.releases.items[0].coverArt.sources[0].url}
              albumId={album.releases.items[0].id}
              albumDist={album.releases.items[0].label}
            />
          );
        })}
      </div>
      {/*<h2>Últimos lanzamientos</h2>
      <ul>
        {popularReleases?.items?.map((release) => {
          return <ReleasesCard key={release.name} release={release} />;
        })}
      </ul>*/}
    </div>
  );
}
