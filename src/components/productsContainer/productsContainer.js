import React from "react";
import data from "../../json/data.json";
import SubCategory from "./subCategory";
import SubCategoryItemsContainer from "./subCategoryItemsContainer";


class productsContainer extends React.Component{
    constructor(props){

        super(props);
        console.log(props)
        this.state=({
            currSubCategory: props.currSubCategory,
            category: props.category
        })
        
    }
    
    getItems=(subCategory,category)=>{
       // console.log(subCategory,category)
        if(subCategory=="All")
            return data.products.filter(obj=>obj.category==category);
        else
            return data.products.filter(obj=>obj.subCategory==subCategory);
    }
    render(){
        return(
            <div className="products-container">
                <SubCategory currSubCategory={this.state.currSubCategory} subCategories={this.props.getSubCategory(this.state.category)} subCategoryOnClick={this.props.subCategoryOnClick}/>
                <SubCategoryItemsContainer products={this.getItems(this.state.currSubCategory,this.state.category)} />
            </div> 
        )
    }
}
export default productsContainer;