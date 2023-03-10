import React from "react";
import DefaultCart from "./defaultCart";
import UpdatedCart from "./updatedCart";

function myCart(props){
    let cart;
    if(props.displayCartDefault){
        cart=<DefaultCart />
    }
    else{
        cart= <UpdatedCart cartValue={props.cartValue} cartCount={props.cartCount}/>
    }
    return (
        <>
            {cart}
        </>
        
    )
}

export default myCart;