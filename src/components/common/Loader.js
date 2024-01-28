/**
 * Imports
 */
import React from "react";
import "../../css/Loader.css"
import { CSpinner } from "@coreui/react";

/**
 * 
 * @returns 
 */
const Loader = () => {

    /**
     * DOM
     */
    return (

        <div className="loader">
            <CSpinner/>
        </div>
    )
}
export default Loader;