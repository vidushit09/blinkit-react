import React from "react";

function updatedCart(props){
    return(
        <button className="navbar__mycart--updated">
            <i className="fa fa-shopping-cart"></i>
            <div className="my-cart-text" style={{display: props.displayCartDefault ? "none" : "block"}}>
                <div>
                    {props.cartCount} items
                </div>
                <div>
                    ₹ {props.cartValue}
                </div>
            </div>
        </button>
    )
}

export default updatedCart;