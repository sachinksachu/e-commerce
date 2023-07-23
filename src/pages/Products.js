/**
 * Imports
 */
import React, { Suspense, useEffect, useState } from "react";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";
import LoadingCard from "../components/common/LoadingCard";

import "../css/Product.css";

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
        <div className="products__main">
            <h1>Products</h1>
            <Suspense fallback={<LoadingCard/>}>
                <ProductList list={products}/>
            </Suspense>
        </div>
    )
}
export default Products;