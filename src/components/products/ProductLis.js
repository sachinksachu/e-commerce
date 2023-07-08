/**
 * Imports
 */
import React from "react";

/**
 * 
 * @param {array} products The product array
 * @returns 
 */
const ProductList = ({ products }) => {

    /**
     * DOM
     */
    return (
        <div>
            {
            products &&
                products.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>)
                )
            }
        </div>
    )
}
export default ProductList;