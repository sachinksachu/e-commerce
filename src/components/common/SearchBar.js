/**
 * Imports
 */
import React from "react";
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react';
import { cilMagnifyingGlass } from '@coreui/icons';

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
            <div id="search-icon">
                <CIcon icon={cilMagnifyingGlass} size="lg" />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    keyword : PropTypes.string,
    onSearch : PropTypes.func
}
export default SearchBar;