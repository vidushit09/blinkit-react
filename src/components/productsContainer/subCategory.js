import React from "react";
import SubCategoryListItem from "./subCategoryListItem";
import { subCategoryClick } from "../../redux/product/productActions";
import { connect } from "react-redux";

class subCategory extends React.Component{
    
    render(){
        let list= this.props.subCategories.map((subCategory,index)=>{
            return(
                <SubCategoryListItem key={index} subCategory={subCategory} currSubCategory={this.props.currSubCategory} subCategoryClick={this.props.subCategoryClick}/>
            )
        })
        let path= "http://127.0.0.1:3000/"+this.props.subCategories[0].categoryThumbnail;
        return(
            <ul className="products-container__category" id="products-container__category">
                <li className={this.props.currSubCategory=="All"? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" } onClick={()=>this.props.subCategoryClick("All")}><div className="products-container__category__category-image"><img src={path} className="products-container__category-image-img"/></div>All</li>
                {list}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      subCategories: state.product.subCategories,
      currSubCategory: state.product.subCategory
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    subCategoryClick: (subCategory)=> dispatch(subCategoryClick(subCategory))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(subCategory);