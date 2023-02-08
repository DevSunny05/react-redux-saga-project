import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartData=useSelector(state=>state.cartData)
  return (
    <div className='p-4'>
        <Link to='/' className='' style={{padding:'5px 10px', marginTop:'20px',border:'1px solid lightgray'}}>Go to Product list</Link>
        
        <div className="cartItem-container" style={{display:'flex',marginLeft:'30px',marginRight:'30px',flexDirection:'column',marginTop:'40px'}}>
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
            <div className='price-details mt-2 border-collapse border w-full p-2 ' >
                <div className='adjust-price'><span className='font-bold'>Amount:</span><span>000</span></div>
                <div className='adjust-price'><span className='font-bold'>Discount:</span><span>000</span></div>
                <div className='adjust-price'><span className='font-bold'>Tax:</span><span>000</span></div>
                <div className='adjust-price'><span className='font-bold'>Total:</span><span>000</span></div>
            </div>
        </div>
    </div>
  )
}

export default Cart