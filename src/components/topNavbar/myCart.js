import React from "react";

import DefaultCart from "./defaultCart";
import UpdatedCart from "./updatedCart";

import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
    return {
      displayCart: state.cart.displayCart,
      cartCount: state.cart.cartCount,
      cartDiscount: state.cart.cartDiscount,
    };
  };
  
export default connect(mapStateToProps)(myCart);
