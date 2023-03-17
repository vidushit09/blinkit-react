import React from "react";

function checkoutProceed(props){
    return(
        <div className="checkout-proceed-outer">
            <div className="checkout-proceed-inner">
                <div className="checkout-proceed__left">
                    <div className="items-total">
                        {props.cartCount} items
                    </div>
                    <li>
                        <span className="discounted-price">
                            ₹{props.cartDiscount}
                        </span>
                        <span className="original-price">
                            ₹{props.cartOriginal}
                        </span>
                        
                        
                    </li>
                </div>
                <div className="checkout-proceed__right">
                    PROCEED <i className="fa fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default checkoutProceed;