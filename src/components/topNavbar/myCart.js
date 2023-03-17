import React from "react";
import DefaultCart from "./defaultCart";
import UpdatedCart from "./updatedCart";

function myCart(props){
    let cart;
    if(props.cartCount==0){
        cart=<DefaultCart />
    }
    else{
        cart= <UpdatedCart cartDiscount={props.cartDiscount} cartCount={props.cartCount}/>
    }
    return (
        <>
            {cart}
        </>
        
    )
}

export default myCart;