export function RenderImage({image_id}){
    console.log(image_id)

    const check = "thisis";

    return(
        <>
        {image_id === '../assets/playlist-holder.jpg' ? <img className="img-playlist" src="https://runmydev.com/wp-content/uploads/2024/05/Frame-2-1.png"/>
        :
        <img className="img-playlist" src={image_id.length > 44 
            ? `https://mosaic.scdn.co/300/${image_id}`
            : `https://i.scdn.co/image/${image_id}`}/>}
        
        </>
      )
}