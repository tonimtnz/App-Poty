import { ArtistAlbums } from "./ArtistAlbums";
import { Verification } from "./Verification";
import { AboutArtist } from "./AboutArtist";
import { ArtistSongs } from "./ArtistSongs";

export function ArtistInfo({ artistData }) {
  const img = artistData.visuals.avatarImage.sources[0].url;
  const stats = artistData.stats;
  //const profile = artistData.profile;
  const albums = artistData.discography.popularReleases.items;
  //const disc = artistData.discography;
  const artistColor = artistData.visuals.avatarImage.extractedColors.colorRaw.hex;
  const artistVerification = artistData.profile.verified;
  const popularSongs = artistData.discography.topTracks.items;
  return (
    <>
      <div
        className="artist-prof-info"
        style={{ backgroundColor: `${artistColor}` }}
      >
        <div className="artist-banner">
          <img src={img} />
          <div className="artist-info-cont">
            {artistVerification && <Verification />}
            <h2 className="artist-name">{artistData.profile.name}</h2>
            <h4 className="listeners-quanty">
              {stats.monthlyListeners} Oyentes mensuales
            </h4>
          </div>
        </div>
      </div>
      <div className="displayInfo">
        <AboutArtist bioInfo={artistData.profile} verify={artistVerification} />
        <ArtistAlbums albumsData={albums}/>
      </div>
      <div className="artist-popular-songs">
        <ArtistSongs songs={popularSongs}/>
      </div> 
    </>
  );
}
