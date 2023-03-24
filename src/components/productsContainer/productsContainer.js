import React from "react";
import SubCategory from "./subCategory";
import SubCategoryItemsContainer from "./subCategoryItemsContainer";
import { connect } from "react-redux";


class productsContainer extends React.Component{
   
    render(){
        return(
            <div className="products-container">
                <SubCategory />
                <SubCategoryItemsContainer products={this.props.products}/> 
            </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.product.products
    };
  };
  export default connect(mapStateToProps)(productsContainer)