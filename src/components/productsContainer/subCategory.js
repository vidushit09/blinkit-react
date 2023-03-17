import React from "react";
import SubCategoryListItem from "./subCategoryListItem";

class subCategory extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let list= this.props.subCategories.map((subCategory,index)=>{
            return(
                <SubCategoryListItem key={index} subCategory={subCategory} currSubCategory={this.props.currSubCategory} subCategoryOnClick={this.props.subCategoryOnClick}/>
            )
        })
        let path= "http://127.0.0.1:3000/"+this.props.subCategories[0].categoryThumbnail;
        return(
            <ul className="products-container__category" id="products-container__category">
                <li className={this.props.currSubCategory=="All"? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" }  onClick={this.props.subCategoryOnClick}><div className="products-container__category__category-image"><img src={path} className="products-container__category-image-img"/></div>All</li>
                {list}
            </ul>
        )
    }
}

export default subCategory;