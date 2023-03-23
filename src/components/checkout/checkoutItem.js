import React from "react";
import UpdateButton from "../productsContainer/updateButton";

import { addToCart } from "../../redux/cart/cartActions.js";
import { removeFromCart } from "../../redux/cart/cartActions.js";
import { addProduct } from "../../redux/product/productActions.js";
import { connect } from "react-redux";

function checkoutItem(props){
    let thumbnail="http://127.0.0.1:3000/"+ props.value.thumbnail;
    let discount= Number(props.value.discount);
    let price=Number(props.value.original);
    let updatedPrice=(price * (1 - 0.01 * discount)).toFixed(2);
    let quantity= props.value.quantity;
    let name=props.value.name;

    function firstAdd(event){
        console.log(event.target.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText);
        props.addToCart(event.target.parentNode)
     }
    function plusone(event){
         props.addToCart(event.target.parentNode.parentNode)
     }
    function minusone(event){
         props.deleteProduct(event.target.parentNode.parentNode)
     }

    
    return(
        <li className="checkout-item">
            <div className="checkout-item__left">
                <div className="product-id" style={{ display: "none" }}>{props.index}</div>
                <div className="checkout-item--img">
                    <img src={thumbnail} />
                </div>
                <div className="item-information">
                    <div className="products-container__item-name">
                        {name}
                    </div>
                    <div className="checkout-container__item-weight">
                        {quantity} kg
                    </div>
                    <div className="checkout-item__price">
                        <div className="products-container__discounted-price">
                            ₹{updatedPrice}
                        </div>
                        <div className="products-container__actual-price">
                            ₹{price}
                        </div>
                    </div>
                </div>

            </div>
            <div className="checkout-item__right">
                <UpdateButton id={props.index} firstAdd={firstAdd} plusone={plusone} minusone={minusone}/>
            </div>
            
            
        </li>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=> dispatch(addToCart(id)),
        removeFromCart: (id)=> dispatch(removeFromCart(id))
    };
    };
    
export default connect(null, mapDispatchToProps)(checkoutItem);