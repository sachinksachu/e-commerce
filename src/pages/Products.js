/**
 * Imports
 */
import React, { Suspense, useEffect, useState } from "react";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";

const ProductList = React.lazy(() => import('../components/products/ProductList'));

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
            <Suspense fallback={<div><p>Loading..</p></div>}>
                <ProductList list={products}/>
            </Suspense>
        </div>
    )
}
export default Products;