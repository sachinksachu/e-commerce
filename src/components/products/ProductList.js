/**
 * Imports
 */
import React from "react";
import Card from "./Card";
import LoadingCard from "./LoadingCard";

/**
 * 
 * @param {array} list The list
 * @returns 
 */
const ProductList = ({ list }) => {

    /**
     * DOM
     */
    return (
        <div>
            {
            list &&
                list.map((item) => (
                    // <Card item={item} key={item.id}/>)
                    <LoadingCard/>)
                )
            }
        </div>
    )
}
export default ProductList;