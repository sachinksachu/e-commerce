/**
 * Imports
 */
import React from "react";
import "../../css/SearchBar.css";

/**
 * 
 * @param {string} keyword The keyword
 * @returns 
 */
const SearchBar = ({ keyword, onSearch }) => {

    /**
     * DOM
     */
    return (
        <div className="search-bar__main">
            <div>
                <input type="text" onChange={(e)=> onSearch(e)} value={keyword}/>
            </div>
        </div>
    )
}
export default SearchBar;