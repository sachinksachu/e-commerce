/**
 * Imports
 */
import React, {useEffect, useState } from "react";
import ProductList from "../components/products/ProductLis";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";

/**
 * 
 * @returns Products
 */
const Products = () => {
    /**
     * States
     */
    const [products, setProducts] = useState(null)

    /**
     * UseEffects
     */
    useEffect(() => {
        (async () => {
            const data = await ApiCall(APIURL.GetAllProducts, "GET");
            setProducts(data.products);
        })();
    }, [])

    /**
     * DOM
     */
    return (
        <div>
            <h1>Products</h1>
            <ProductList products={products}/>
        </div>
    )
}
export default Products;