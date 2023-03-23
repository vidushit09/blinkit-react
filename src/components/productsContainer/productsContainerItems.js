import React from "react";
import Product from "./product.js";
import { connect } from "react-redux";

function productsContainerItems(props){
    let list= props.products.map((product,index)=>{
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

const mapStateToProps = (state) => {
    return {
      products: state.product.products
    };
  };
  

export default connect(mapStateToProps)(productsContainerItems);