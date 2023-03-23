import React from "react";
import ProductsContainerItemsHeader from "./productsContainerItemsHeader";
import ProductsContainerItems from "./productsContainerItems";
import { updateProducts } from "../../redux/product/productActions";
import { connect } from "react-redux";

class subCategoryItemsContainer extends React.Component{
    constructor(props){
        super(props);
    }
    sortBy=(event)=>{
        let selectedOption=event.target.value;
        let currProducts= this.props.products;
        if (selectedOption == "Price (Low to High)") {
            currProducts = currProducts.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
            });
        }
        else if (selectedOption == "Price (High to Low)") {
            currProducts = currProducts.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
            });
        }
        else if (selectedOption == "Discount (High to Low)") {
            currProducts = currProducts.sort((a, b) => {
                if (a.discount > b.discount) {
                    return -1;
                }
            });
        }
        else {
            currProducts = currProducts.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                }
            });
        } 
        this.props.updateProducts(currProducts);

    }
    render(){
        return(
            <div className="products-container__items-container">
                <ProductsContainerItemsHeader sortBy={this.sortBy}/>
                <ProductsContainerItems/> 
            </div>
                
        )
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.product.products
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    updateProducts: (currProducts)=> dispatch(updateProducts(currProducts)),
    
};
};

export default connect(mapStateToProps, mapDispatchToProps)(subCategoryItemsContainer);