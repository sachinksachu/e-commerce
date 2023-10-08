/**
 * Imports
 */
import React, { Suspense, useEffect, useState } from "react";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";
import ProductList from '../components/products/ProductList';

import "../css/Product.css";
import SearchBar from "../components/common/SearchBar";

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
    const [data, setData] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState(null);

    /**
     * UseEffects
     */
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        const data = await ApiCall(`${APIURL.GetAllProducts}?q=${searchKeyword}&limit=10&skip=${count}`, "GET");
        setData(data);

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
        var screenHeightAndScroll = window.innerHeight + document.documentElement.scrollTop;
        var offSetHeight = document.documentElement.offsetHeight;
        screenHeightAndScroll = offSetHeight - screenHeightAndScroll > 0 ? Math.ceil(screenHeightAndScroll) : Math.floor(screenHeightAndScroll);
        
        if (screenHeightAndScroll !== document.documentElement.offsetHeight || isLoading || data.total === products.length) {
          return;
        }
        fetchData();
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);

    const onSearch = async (e) => {
        var text = e.target.value;
        setSearchKeyword(text);
        setIsLoading(true);
        setError(null);
        const data = await ApiCall(`${APIURL.SearchProducts}?q=${text}&limit=10&skip=${count}`, "GET");

        try {
            setProducts(data.products);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    /**
     * DOM
     */
    return (
        <div className="products__main">
            <h1>Products</h1>
            <SearchBar keyword={searchKeyword} onSearch={onSearch}/>
            <ProductList list={products} />
            {isLoading && <p>Loading...</p>}
        </div>
    )
}
export default Products;