import React from "react";
import {Link} from "react-router-dom";

function updatedCart(props){

    return(
        <Link to="/checkout">
        <button className="navbar__mycart--updated">
            <i className="fa fa-shopping-cart"></i>
            <div className="my-cart-text" style={{display: props.displayCartDefault ? "none" : "block"}}>
                <div>
                    {props.cartCount} items
                </div>
                <div>
                    ₹ {props.cartDiscount}
                </div>
            </div>
        </button>
        </Link>
    )
}

export default updatedCart;