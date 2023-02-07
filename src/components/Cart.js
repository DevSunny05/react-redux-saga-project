import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartData=useSelector(state=>state.cartData)
  return (
    <div>
        <Link to='/'>Go to Product list</Link>
        <h1>Cart Page</h1>
        <div classname="cartItem-container" style={{display:'flex',marginLeft:'30px',marginRight:'30px'}}>
            <table style={{flex:'65%',borderCollapse:'collapse'}}>
                <tr >
                    <td>Name</td>
                    <td>Color</td>
                    <td>price</td>
                    <td>Brand</td>
                    <td>Category</td>
                </tr>
                {
                    cartData.map(item=>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                    </tr>
                        )
                }
            </table>
            <div className='price-details'>
                <div className='adjust-price'><span>Amount:</span><span>000</span></div>
                <div className='adjust-price'><span>Discount:</span><span>000</span></div>
                <div className='adjust-price'><span>Tax:</span><span>000</span></div>
                <div className='adjust-price'><span>Total:</span><span>000</span></div>
            </div>
        </div>
    </div>
  )
}

export default Cart