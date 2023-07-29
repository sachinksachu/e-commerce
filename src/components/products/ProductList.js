/**
 * Imports
 */
import React,{Suspense} from "react";
import Card from "../common/Card";
import LoadingCard from "../common/LoadingCard";
import "../../css/Product.css";

/**
 * 
 * @param {array} list The list
 * @returns 
 */
const ProductList = ({ list }) => {

    /**
     * DOM
     */
    return (
        <div className="product-list__main">
            {
                list &&
                list.map((item) => (
                    <Suspense fallback={<LoadingCard />}>
                        <Card item={item} key={item.id} />
                    </Suspense>
                )

                )
            }
        </div>
    )
}
export default ProductList;