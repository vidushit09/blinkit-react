import React from "react";
import { categoryClick } from "../../redux/product/productActions.js";
import Category from "./category.js";
import CategoryMore from "./categoryMore.js";
import { connect } from "react-redux";
import data from "../../json/data.json"


function categoriesNavbar(props){
    console.log(props);
    let list,i=7;
    if(props.categories.length<=7){
        list=props.categories.map((category,index)=> {
            return(
                <Category category={category} key={index} categoryClick={props.categoryClick}/>
            )
            
        });
    }
    else{
            list=props.categories.slice(0,7).map((category,index)=> {
                return(
                    <Category category={category} key={index} categoryClick={props.categoryClick}/>
                )  
            });
           
        
        list.push(<CategoryMore index={i++} categories={props.categories.slice(7,)}  categoryClick={props.categoryClick}/>);
        
    }
    return(
        <ul className="category-list display-flex" id="category-list">
            {list}
        </ul>
    )
}


const mapStateToProps = (state) => {
    return {
      categories: state.product.categories
    };
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    categoryClick: (category)=> dispatch(categoryClick(category))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(categoriesNavbar);