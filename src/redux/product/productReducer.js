import data from "../../json/data.json";

import {
  CATEGORY_CLICK,
  SUB_CATEGORY_CLICK
} from "./productTypes";

const productState = {
  categories: data.topTabCategoryList,
  category: "Vegetables and Fruits",
  subCategory: "All",
  products: data.products.filter(obj=>obj.category=="Vegetables and Fruits"),
  subCategories: data.leftTabCategories.filter(obj=>obj.category=="Vegetables and Fruits")
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case CATEGORY_CLICK: {
      return {
        ...state,
        category: action.category,
        subCategory: "All",
        products: data.products.filter(obj=>obj.category==action.category),
        subCategories: data.leftTabCategories.filter(obj=>obj.category==action.category)
      };
    }

    case SUB_CATEGORY_CLICK: {
        if(action.subCategory=="All"){
            return{
                ...state,
                subCategory: "All",
                products: data.products.filter(obj=>obj.category==state.category)
            }
        } 
        else{
            return {
                ...state,
                subCategory: action.subCategory,
                products: data.products.filter(obj=>obj.subCategory==action.subCategory)
            };
        }    
    }
    default:
      return state;
  }
};

export default productReducer;