import React from "react";
import data from "../../json/data.json";
import SubCategory from "./subCategory";
import SubCategoryItemsContainer from "./subCategoryItemsContainer";


class productsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state=({
            currSubCategory: props.currSubCategory,
            category: props.category
        })
        
    }
   
      
    getItems=(subCategory,category)=>{
        if(subCategory=="All")
            return data.products.filter(obj=>obj.category==category);
        else
            return data.products.filter(obj=>obj.subCategory==subCategory);
    }
    render(){
        return(
            <div className="products-container">
                <SubCategory currSubCategory={this.props.currSubCategory} subCategories={this.props.getSubCategory(this.props.category)} subCategoryOnClick={this.props.subCategoryOnClick}/>
                <SubCategoryItemsContainer products={this.getItems(this.props.currSubCategory,this.props.category)} cart={this.props.cart}  addProduct={this.props.addProduct} deleteProduct={this.props.deleteProduct} />
            </div> 
        )
    }
}
export default productsContainer;