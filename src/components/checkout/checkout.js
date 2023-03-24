import React from "react";
import CheckoutHeader from "./checkoutHeader";
import CheckoutSubHeader from "./checkoutSubHeader";
import CheckoutItems from "./checkoutItems";
import CheckoutFooter from "./checkoutFooter";

function checkout(props){
    return(
        <div className="checkout">
            <CheckoutHeader />
            <CheckoutSubHeader/>
            <CheckoutItems/>
            <CheckoutFooter  cartOriginal={props.cartOriginal} cartDiscount={props.cartDiscount}  cartCount={props.cartCount}/>
        </div>
    )
}

export default checkout;