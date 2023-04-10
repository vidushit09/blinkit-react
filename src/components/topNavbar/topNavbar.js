import React from "react";
import Logo from "./logo";
import DeliveryDetails from "./deliveryDetails";
import Login from "./login";
import MyCart from "./myCart";

function topNavbar(props){
    return(
        <div className="navbar display-flex">
            <div className="navbar__left display-flex">
                <Logo />
                <DeliveryDetails />
            </div>
            <div className="navbar__right">
                <Login />
                <MyCart cartCount={props.cartCount} cartDiscount={props.cartDiscount} displayCartDefault={props.displayCartDefault}/>
            </div>
        </div>
    )
}

export default topNavbar;