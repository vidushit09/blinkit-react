import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
    return {
      cartCount: state.cart.cartCount,
      cartDiscount: state.cart.cartDiscount,
      cartOriginal: state.cart.cartOriginal
    };
  };
  

export default connect(mapStateToProps)(checkoutProceed);