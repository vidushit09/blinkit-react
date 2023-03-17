import React from "react";
import Product from "./product.js";

function productsContainerItems(props){
    let list= props.products.map((product,index)=>{
        return(
            <Product key={index} product={product} cart={props.cart} addProduct={props.addProduct} deleteProduct={props.deleteProduct}/>
        )
    })
    return(
        <div className="products-container__items" id="products-container__items">
            {list}
        </div>
    )
}

export default productsContainerItems;