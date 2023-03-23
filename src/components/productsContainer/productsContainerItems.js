import React from "react";
import Product from "./product.js";
import { connect } from "react-redux";
import { tsImportEqualsDeclaration } from "@babel/types";

class productsContainerItems extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products: this.props.products
        }
    }
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


const mapStateToProps = (state) => {
    return {
      products: state.product.products
    };
  };
  

export default connect(mapStateToProps)(productsContainerItems);
