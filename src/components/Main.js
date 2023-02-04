import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart,removeFromCart,emptyCart} from '../redux/action'
import { productList } from '../redux/productAction'

const Main = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.productData)
    console.log(data)
    const product={
        name:'phone',
        type:'mobile',
        price:1000000,
        color:'red'
      }
  return (
    
    <div style={{display:'flex',justifyContent:'space-around',margin:'20px'}}>
        <button onClick={()=>dispatch(addToCart(product))}>Add To cart</button>
        <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove from cart</button>
        <button onClick={()=>dispatch(emptyCart())}>Empty cart</button>
        <button onClick={()=>dispatch(productList())}>Get Product List</button>

    </div>
  )
}

export default Main