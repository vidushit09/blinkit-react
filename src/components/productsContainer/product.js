import React, { PureComponent } from "react";
import UpdateButton from "./updateButton.js";


class product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showDefault: true,
            itemCount: 0,
            cart: this.props.cart
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
            showDefault: false,
            itemCount:1
        })
       this.props.addProduct(event.target.parentNode)

    
    }
    plusone=(event)=>{
        this.setState({
            itemCount: this.state.itemCount+1
        })
        this.props.addProduct(event.target.parentNode.parentNode)
    }
    minusone=(event)=>{
        
        this.setState({
            itemCount: this.state.itemCount-1
        })
       // console.log(this.state.itemCount)
        if(this.props.cart.get(event.target.parentNode.parentNode.parentNode.getElementsByClassName("product-id")[0].innerText).quantity==1){
            this.setState({
                showDefault: true
            })
        }
        this.props.deleteProduct(event.target.parentNode.parentNode)
    }
    render() {
        let path = "http://127.0.0.1:3000/" + this.props.product.thumbnail;        
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
                    <UpdateButton cart={this.props.cart} id={this.props.product.id} firstAdd={this.firstAdd} plusone={this.plusone} minusone={this.minusone} showDefault={this.state.showDefault} itemCount={this.state.itemCount}/>

                </div>
            </div>
        )
    }

}


export default product;