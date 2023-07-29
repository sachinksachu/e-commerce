/**
 * Imports
 */
import React, { Suspense, useEffect, useState } from "react";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";
import ProductList from '../components/products/ProductList';

import "../css/Product.css";

// const ProductList = React.lazy(() => import('../components/products/ProductList'));

/**
 * 
 * @returns Products
 */
const Products = () => {
    /**
     * States
     */
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    /**
     * UseEffects
     */
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => { 
        setIsLoading(true);
        setError(null);
        const data = await ApiCall(`${APIURL.GetAllProducts}?limit=10&skip=${count}`, "GET");

        try {
            setProducts(prevItems => [...prevItems, ...data.products]);
            setCount(prevPage => prevPage + 10);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchData();
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);

    /**
     * DOM
     */
    return (
        <div className="products__main">
            <h1>Products</h1>
                <ProductList list={products}/>
            {isLoading && <p>Loading...</p>}
        </div>
    )
}
export default Products;