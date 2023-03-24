import category from "../../components/categoriesNavbar/category";
import data from "../../json/data.json";

import {
  CATEGORY_CLICK,
  SUB_CATEGORY_CLICK,
  PLUS_ONE,
  MINUS_ONE
} from "./productTypes";

const productState = {
  data: data.products,
  categories: data.topTabCategoryList,
  category: "Vegetables and Fruits",
  subCategory: "All",
  products: data.products.filter(obj=>obj.category=="Vegetables and Fruits"),
  subCategories: data.leftTabCategories.filter(obj=>obj.category=="Vegetables and Fruits"),
  count: 0,
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case PLUS_ONE: {
      let tempData=productState.data;
      let id= action.payload.id;
      tempData.find(obj=>obj.id==id)["count"]+=1;



      return {
        ...state,
        count: parseInt(state.count) + 1,
        data: tempData
      };
    }

    case MINUS_ONE: {
      let tempData=productState.data;
      let id= action.payload.id;
      tempData.find(obj=>obj.id==id)["count"]-=1;



      return {
        ...state,
        count: parseInt(state.count) - 1,
        data: tempData
      };
    }

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