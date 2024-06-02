import "../styles/UserProfile.css";
import { RenderImage } from "./RenderImage";


export function PlaylistCard({ playlistInfo }) {
  function getImageId(playlistInfo) {
    console.log(playlistInfo)
     if(!playlistInfo.image_url){
      const idPlace = '../assets/playlist-holder.jpg'
      return idPlace;
     }else{
       const initPartes = playlistInfo.image_url;
       const partes = playlistInfo.image_url.split(":");
       if(partes[0] === "https" ){
         const ids = initPartes
         console.log(ids)
         return ids;
       }else{
         const ids = partes.slice(2).join("");
         console.log(ids)
         return ids;
       }
     }
    }
  

  const image_id = getImageId(playlistInfo);

  return (
    <>
      <div className="playlist-card">
        <RenderImage image_id={image_id}/>
        <h4>{playlistInfo.name}</h4>
      </div>
    </>
  );
}
