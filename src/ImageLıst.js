import ImageItem from "./ImageItem";
import "./Image.css"

function ImageList({imagesPlaceHolder}) {
    return ( 
        <div className="image-content">
            {imagesPlaceHolder.map((image,index)=>{
               return <ImageItem key={index} image={image}/>
            })}
        </div>
     );
}

export default ImageList;