import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from './constant'

export const addToCart=(data)=>{
    console.log("action is called 1",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart=(data)=>{
    console.log("action is called",data)
    return{
        type:REMOVE_FROM_CART,
        data:data
    }
}

export const emptyCart=()=>{
    console.log("action is called")
    return{
        type:EMPTY_CART,
       
    }
}

