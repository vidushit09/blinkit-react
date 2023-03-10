import React from "react";

function defaultCart(){
    return(
        <button className="navbar__mycart">
            <i className="fa fa-shopping-cart"></i>
            <div className="my-cart">My Cart</div>
            <div className="my-cart-text">
            </div>
        </button>
    )
}

export default defaultCart;