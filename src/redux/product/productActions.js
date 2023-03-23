import {
    CATEGORY_CLICK,
    SUB_CATEGORY_CLICK,
    PLUS_ONE,
    MINUS_ONE,
    UPDATE_PRODUCTS
  } from "./productTypes";
  
  export const addProduct = (id) => {
    return {
      type: PLUS_ONE,
      payload: {
        id: id
      },
    };
  };
  
  export const deleteProduct = (id) => {
    return {
      type: MINUS_ONE,
      payload: {
        id: id
      },
    };
  };
  
  export const categoryClick = (category) => {
    return {
      type: CATEGORY_CLICK,
      category: category,
    };
  };
  
  export const subCategoryClick = (subCategory) => {
    return {
      type: SUB_CATEGORY_CLICK,
      subCategory: subCategory,
    };
  };
  export const updateProducts=(currProducts)=>{
    return{
      type: UPDATE_PRODUCTS,
      payload:{
        currProducts: currProducts
      }
    }
  }