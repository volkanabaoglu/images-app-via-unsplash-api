
function ImageItem({image}) {
    
    return ( 
        <div >
            <div>
            <img className="imageListImg" src={image.urls.small} alt={image.alt_description} />
            </div>
            
        </div>
     );
}

export default ImageItem;