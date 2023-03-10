import React from "react";
import Product from "./product.js";

function productsContainerItems(props){
    let list= props.products.map(product=>{
        return(
            <Product product={product}/>
        )
    })
    return(
        <div className="products-container__items" id="products-container__items">
            {list}
        </div>
    )
}

export default productsContainerItems;