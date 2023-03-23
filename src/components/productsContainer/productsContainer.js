import React from "react";
import SubCategory from "./subCategory";
import SubCategoryItemsContainer from "./subCategoryItemsContainer";


class productsContainer extends React.Component{
   
    render(){
        return(
            <div className="products-container">
                <SubCategory />
                <SubCategoryItemsContainer /> 
            </div> 
        )
    }
}
export default productsContainer;