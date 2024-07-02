export function RenderImage({image_id}){
    const types = {
        placeholder: "",
        url: "",
        mosaic: "https://mosaic.scdn.co/300/",
        image: "https://i.scdn.co/image/",
      };
    

    return(
        <img
        className="img-playlist"
        src={`${types[image_id.type]}${image_id.img}`}
      />
      )
}