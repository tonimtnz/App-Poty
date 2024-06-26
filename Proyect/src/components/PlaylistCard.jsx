import "../styles/UserProfile.css";
import { RenderImage } from "./RenderImage";


export function PlaylistCard({ playlistInfo }) {
  function getImageId(playlistInfo) {
    if (!playlistInfo.image_url) {
      const idPlace = {
        type: "placeholder",
        img: "https://runmydev.com/wp-content/uploads/2024/05/Frame-2-1.png",
      };
      return idPlace;
    } else if (playlistInfo.image_url.includes("https")) {
      return { type: "url", img: playlistInfo.image_url };
    } else {
      let type = "";
      if (playlistInfo.image_url.includes("mosaic")) type = "mosaic";
      else type = "image";
      const partes = playlistInfo.image_url.split(":");
      const ids = partes.slice(2).join("");
      return { type: type, img: ids };
    }


    //!Esto se queda comentado por ahora
    /* console.log(playlistInfo)
     if(!playlistInfo.image_url){
      const idPlace = '../assets/playlist-holder.jpg'
      return idPlace;
     }else{
       const initPartes = playlistInfo.image_url;
       const partes = playlistInfo.image_url.split(":");
       if(partes[0] === "https"){
         const ids = initPartes
         console.log(ids)
         return ids;
       }else{ 
         const ids = partes.slice(2).join("");
         console.log(ids)
         return ids;
       }
     } */
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
