import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart,removeFromCart,emptyCart} from '../redux/action'

const Main = () => {
    const dispatch=useDispatch()
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
    </div>
  )
}

export default Main