/**
 * Imports
 */
import React, {useState } from "react";

import loadingImage from "../../assets/loading-image.png"
import "../../css/Image.css";


/**
 * 
 * @param {url} url The image url
 * @returns 
 */
const Image = ({ url }) => {

    /**
     * States
     */
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const onLoadImage = () => {
        console.log("ima")
        setIsImageLoaded(true)
    }

    /**
     * DOM
     */
    return (
        <div className="image--view">
            {
                <>
                    <img src={loadingImage} alt="img" className={isImageLoaded ? "hide-image" : "show-image"} id="loader-image"/>
                    <img src={url} alt="img" className={!isImageLoaded ? "hide-image" : "show-image"} id="img--view__thumbnail" onLoad={() => onLoadImage()} />
                </>

            }
        </div>
    )
}
export default Image;