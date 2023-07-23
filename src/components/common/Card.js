/**
 * Imports
 */
import React from "react";

import Image from "./Image";

import "../../css/Card.css";

/**
 * 
 * @param {array} item The item
 * @returns 
 */
const Card = ({ item }) => {

    /**
     * DOM
     */
    return (
        <div className="card--view">
            {
                item &&
                <div key={item.id} className="card--content">
                    {/* <img src={item.thumbnail} alt={item.title} id="card--content__thumbnail"/> */}
                    <Image url={item.thumbnail} id="card--content__thumbnail"/>
                    
                    <h3 id="card--content__title">{item.title}</h3>
                    <p id="card--content__description">{item.description}</p>
                    <p id="card--content__price">{item.price}</p>
                </div>
            }
        </div>
    )
}
export default Card;