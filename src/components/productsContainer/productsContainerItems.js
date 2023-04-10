import React from "react";
import Product from "./product.js";
import { connect } from "react-redux";

class productsContainerItems extends React.Component{

    render(){
        let list= this.props.products.map((product,index)=>{
            return(
                <Product key={index} product={product}/>
            )
        })
        return(
            <div className="products-container__items" id="products-container__items">
                {list}
            </div>
        )
    }
}




export default productsContainerItems;
