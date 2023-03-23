import React from "react";
import { connect } from "react-redux";

function checkoutSubHeader(props){
    return (
        <>
            <div className="delivery-time">
                Delivery in 10 minutes
            </div>
            <div className="items-count">
                {props.cartCount} items
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      cartCount: state.cart.cartCount
    };
  };
  

export default connect(mapStateToProps)(checkoutSubHeader);

