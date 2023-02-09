import { PRODUCT_LIST, SEARCH_PRODUCT,  } from "./constant"


export const productList=()=>{
    console.log("action is called 1",)
   
    return{
        type:PRODUCT_LIST,
       
    }
}

export const productSearch=(query)=>{
    console.log("action is called 2",)
   
    return{
        type:SEARCH_PRODUCT,
       query
    }
}

