import React, { PureComponent } from "react";
import UpdateButton from "./updateButton.js";
import { addToCart } from "../../redux/cart/cartActions.js";
import { removeFromCart } from "../../redux/cart/cartActions.js";
import { addProduct } from "../../redux/product/productActions.js";
import { connect } from "react-redux";

class product extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.cartItems!=undefined){
            this.state={
                displayDefault: true,
                count: this.props.cartItems.get(String(this.props.index))!=undefined ? this.props.cartItems.get(String(this.props.index)).quantity : 0
            }
        }
        else{
            this.state={
                displayDefault: true,
                count: 0
            }
        }
        
    }
    discountedPrice = (price, discount) => {
        price = Number(price);
        discount = Number(discount);
        price = (price * (1 - 0.01 * discount)).toFixed(2);
        return price;
    }
    firstAdd=(event)=>{
        this.setState({
            displayDefault: false,
            count:this.state.count+1
        })
       this.props.addToCart(event.target.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText)
       this.props.addProduct(event.target.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText)
    }
    plusone=(event)=>{
        this.setState({
            count:this.state.count+1
        })
        this.props.addToCart(event.target.parentNode.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText)
        this.props.addProduct(event.target.parentNode.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText)
    }

    minusone=(event)=>{
        if(this.state.count==1){
            this.setState({
                count:this.state.count-1,
                displayDefault:true
            })
        }
        else{
            this.setState({
                count:this.state.count-1
            })
        }
        this.props.removeFromCart(event.target.parentNode.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText)
    }
    
    render() {
        let path = "http://127.0.0.1:3000/" + this.props.product.thumbnail;  
        let displayDefault = this.state.displayDefault;

        if (parseInt(this.props.count) != 0) {
            displayDefault = false;
        }
             
        return (
            <div className="products-container__item">
                <div className="product-id" style={{ display: "none" }}>{this.props.product.id}</div>
                <div className="products-container__item-image">
                    <div className="products-container__discount">{this.props.product.discount}% OFF </div>
                    <img src={path} className="product-container__item--img" />
                    <div className="products-container__sourced-at">Sourced at {this.props.product.sourcedAt}</div></div>
                <div className="products-container__item-name">{this.props.product.name}</div>
                <div className="products-container__item-weight">{this.props.product.quantity} kg</div>
                <div className="products-container__item-footer">
                    <div className="products-container__price-details">
                        <div className="products-container__discounted-price">₹{this.discountedPrice(this.props.product.price, this.props.product.discount)}</div>
                        <div className="products-container__actual-price">₹{this.props.product.price}</div>
                    </div>
                    <UpdateButton count={this.state.count} displayDefault={this.state.displayDefault} id={this.props.product.id} firstAdd={this.firstAdd} plusone={this.plusone} minusone={this.minusone}/>

                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
      products: state.product.products,
      count: state.product.count,
      cart: state.cart.cartItems
    };
  };
  

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=> dispatch(addToCart(id)),
        removeFromCart: (id)=> dispatch(removeFromCart(id)),
        addProduct: (id)=>dispatch(addProduct(id))
    };
    };
    
export default connect(mapStateToProps, mapDispatchToProps)(product);