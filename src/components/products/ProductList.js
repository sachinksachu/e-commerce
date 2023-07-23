/**
 * Imports
 */
import React from "react";
import Card from "./Card";
import "../../css/Product.css";

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
        <div className="product-list__main">
            {
            list &&
                list.map((item) => (
                    <Card item={item} key={item.id}/>)
                    
                )
            }
        </div>
    )
}
export default ProductList;