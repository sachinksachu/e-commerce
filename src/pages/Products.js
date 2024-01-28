/**
 * Imports
 */
import React, { Suspense, useEffect, useState, useCallback, useMemo, Profiler } from "react";
import ApiCall from "../api/ApiCall";
import APIURL from "../api/ApiUrls";
import ProductList from '../components/products/ProductList';

import "../css/Product.css";
import SearchBar from "../components/common/SearchBar";
import { CSpinner, CBadge } from "@coreui/react";
import Loader from "../components/common/Loader";

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
    const [searchKeyword, setSearchKeyword] = useState("");

    /**
     * UseEffects
     */
    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = useCallback(()=>{

    },[])

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

    const onSearch = useCallback(async(e) => {
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
    },[])

    
    // const cal = (x,y) =>{
    //     return x*y;
    // }
    // const expCal = useMemo(()=> cal(500,9000),[])
    /**
     * DOM
     */

    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        // Aggregate or log render timings...
        console.log("id:",id," phase:", phase, "actualDuration:", actualDuration, "baseDuration:", baseDuration,
        "commitTime:", commitTime)
      }
    return (
        <div className="products__main">
            <SearchBar keyword={searchKeyword} onSearch={onSearch}/>
            <Profiler id="productList" onRender={onRender}>
                <ProductList list={products} />
            </Profiler>
            {isLoading ? <Loader/> : null }
            
        </div>
    )
}
export default Products;