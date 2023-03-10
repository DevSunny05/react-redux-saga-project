import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("reducer called 3", action);
  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      return [ action.data,...data];
    case REMOVE_FROM_CART:
      // remove to cart logic
      // data.length=data.length ? data.length - 1 : [];
      const remaingItems=data.filter(item=>item.id !== action.data)
      return [...remaingItems];

    case EMPTY_CART:
      // remove to cart logic
      data=[]
      return [...data];

    default:
      return data;
  }
};
