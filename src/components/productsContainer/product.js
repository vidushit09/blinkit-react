import React, { PureComponent } from "react";
import UpdateButton from "./updateButton.js";


class product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showDefault:true,
            count: 0
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
            count:1
          });
       this.props.addProduct(event.target.parentNode)
    
    }
    plusone=(event)=>{
        console.log(event.target)
        this.setState({
            count:this.state.count+1
        })
        this.props.addProduct(event.target.parentNode.parentNode)
    }
    minusone=(event)=>{
        if(this.state.count==1){
            this.setState({
                showDefault:true,
                count:0
            })
        }
        else{
            this.setState({
                count:this.state.count-1
            })
        }
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
                    <UpdateButton cart={this.props.cart} product={this.props.product} count={this.state.count} firstAdd={this.firstAdd} showDefault={this.state.showDefault} plusone={this.plusone} minusone={this.minusone}/>

                </div>
            </div>
        )
    }

}


export default product;