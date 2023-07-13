/**
 * Imports
 */
import React from "react";

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
        <div>
            {
                item &&
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            }
        </div>
    )
}
export default Card;