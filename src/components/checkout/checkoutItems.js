import React from "react";
import CheckoutItem from "./checkoutItem";
import { connect } from "react-redux";

function checkoutItems(props){
    let itemsMap= props.cartItems;
    console.log(props.cartItems);
    let products=[];
    
     for(let [index,value] of itemsMap){
        products.push(

            <CheckoutItem index={index} value={value}/>
        )
     }

    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems
    };
  };
  

export default connect(mapStateToProps)(checkoutItems);