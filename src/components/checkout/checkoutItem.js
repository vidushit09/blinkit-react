import React from "react";
import UpdateButton from "../productsContainer/updateButton";

import { addToCart } from "../../redux/cart/cartActions.js";
import { removeFromCart } from "../../redux/cart/cartActions.js";
import { connect } from "react-redux";

class checkoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDefault: false,
      count: this.props.cartItems.get(String(this.props.index)).quantity,
      cartItems: this.props.cartItems,
    };
  }
  firstAdd = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addToCart(
      event.target.parentNode.parentNode.parentNode.getElementsByClassName(
        "product-id"
      )[0].innerText
    );
  };
  plusone = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addToCart(
      event.target.parentNode.parentNode.parentNode.getElementsByClassName(
        "product-id"
      )[0].innerText
    );
  };
  minusone = (event) => {
    this.setState({
      count: this.state.count - 1,
    });
    this.props.removeFromCart(
      event.target.parentNode.parentNode.parentNode.getElementsByClassName(
        "product-id"
      )[0].innerText
    );
  };

  render() {
    if (this.state.count != 0) {
      let thumbnail = "http://127.0.0.1:3000/" + this.props.value.thumbnail;
      let discount = Number(this.props.value.discount);
      let price = Number(this.props.value.original);
      let updatedPrice = (price * (1 - 0.01 * discount)).toFixed(2);
      let quantity = this.props.value.quantity;
      let name = this.props.value.name;

      return (
        <li className="checkout-item">
          <div className="checkout-item__left">
            <div className="product-id" style={{ display: "none" }}>
              {this.props.index}
            </div>
            <div className="checkout-item--img">
              <img src={thumbnail} />
            </div>
            <div className="item-information">
              <div className="products-container__item-name">{name}</div>
              <div className="checkout-container__item-weight">
                {quantity} kg
              </div>
              <div className="checkout-item__price">
                <div className="products-container__discounted-price">
                  ₹{updatedPrice}
                </div>
                <div className="products-container__actual-price">₹{price}</div>
              </div>
            </div>
          </div>
          <div className="checkout-item__right">
            <UpdateButton
              id={this.props.index}
              firstAdd={this.firstAdd}
              plusone={this.plusone}
              minusone={this.minusone}
              displayDefault={this.state.displayDefault}
              count={this.state.count}
            />
          </div>
        </li>
      );
    } else {
      return <></>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    count: state.product.count,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(checkoutItem);
