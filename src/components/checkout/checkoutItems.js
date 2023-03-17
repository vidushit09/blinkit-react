import React from "react";
import CheckoutItem from "./checkoutItem";

function checkoutItems(props){
    let itemsMap= new Map();
    let products=[];
    
    Object.keys(window.localStorage).forEach(function(key){
        itemsMap.set(key,window.localStorage.getItem(key));
     });
     for(let [index,value] of itemsMap){
        products.push(

            <CheckoutItem index={index} value={JSON.parse(value)} addProduct={props.addProduct} deleteProduct={props.deleteProduct} />
        )
     }

    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

export default checkoutItems;