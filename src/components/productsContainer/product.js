import React, { PureComponent } from "react";

function product(props) {
    function discountedPrice(price, discount){
        price=Number(price);
        discount=Number(discount);
        price =(price * (1 - 0.01 * discount)).toFixed(2);
        return price;
    }
    return (
        <div className="products-container__item">
            <div className="product-id" style={{display: "none"}}>{props.product.id}</div>
            <div className="products-container__item-image">
                <div className="products-container__discount">{props.product.discount}% OFF </div>
                <img src="http://127.0.0.1:5500/img/potato.png" className="product-container__item--img" />
                <div className="products-container__sourced-at">Sourced at {props.product.sourcedAt}</div></div>
            <div className="products-container__item-name">{props.product.name}</div>
            <div className="products-container__item-weight">{props.product.quantity} kg</div>
            <div className="products-container__item-footer">
                <div className="products-container__price-details">
                    <div className="products-container__discounted-price">₹{discountedPrice(props.product.price, props.product.discount)}</div>
                    <div className="products-container__actual-price">₹{props.product.price}</div>
                </div>
                <button id="products-container__item-add--default" className="products-container__item--add-default">ADD</button>
                <div id="products-container__item-add--updated" className="products-container__item--add-updated" style={{display: "none"}}>
                    <i className="fa fa-minus" aria-hidden="true" id="minus-button"></i><div className="count">1</div><i className="fa fa-plus" aria-hidden="true" id="plus-button"></i>
                </div>
            </div>
        </div>
    )
}

export default product;