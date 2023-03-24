import {
    CATEGORY_CLICK,
    SUB_CATEGORY_CLICK,
    PLUS_ONE,
    MINUS_ONE
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
 