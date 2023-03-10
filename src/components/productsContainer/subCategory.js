import React from "react";
import SubCategoryListItem from "./subCategoryListItem";

class subCategory extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let list= this.props.subCategories.map(subCategory=>{
            return(
                <SubCategoryListItem subCategory={subCategory} currSubCategory={this.props.currSubCategory} subCategoryOnClick={this.props.subCategoryOnClick}/>
            )
        })
        return(
            <ul className="products-container__category" id="products-container__category">
                <li className={this.props.currSubCategory=="All"? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" }  onClick={this.props.subCategoryOnClick}><div className="products-container__category__category-image"><img src={process.env.PUBLIC_URL + '/apple.png'} className="products-container__category-image-img"/></div>All</li>
                {list}
            </ul>
        )
    }
}

export default subCategory;