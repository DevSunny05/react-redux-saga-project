import {  SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  console.log("reducer called ", action);
  switch (action.type) {
    
    case SET_PRODUCT_LIST:
      // add to cart logic
      return [...action.data];

    default:
      return data;
  }
};
