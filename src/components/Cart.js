import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartData=useSelector(state=>state.cartData)
    let amount=cartData.length && cartData.map(item=>item.price).reduce((acc,ind)=>acc+ind)
  return (
    <div className='p-4 ' >
        <Link to='/' className='m-5 rounded bg-gradient-to-r from-red-200  to-blue-200' style={{padding:'5px 10px', marginTop:'20px',border:'1px solid lightgray'}}>Go to Product list</Link>
        
        <div className="cartItem-container" style={{display:'flex',marginLeft:'30px',marginRight:'30px',marginTop:'40px'}}>
            <table style={{flex:'60%',borderCollapse:'collapse'}}>
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
            <div className='price-details mt-2 border-collapse border w-full p-4' style={{flex:'35%' ,marginLeft:'20px',}} >
                <div className='adjust-price'><span className='font-bold'>Amount:</span><span>{amount}</span></div>
                <div className='adjust-price'><span className='font-bold'>Discount:</span><span>{amount/10}</span></div>
                <div className='adjust-price'><span className='font-bold'>Tax:</span><span>{amount/0.02}%</span></div>
                <div className='adjust-price'><span className='font-bold'>Total:</span><span>{amount - (amount/10)}</span></div>
            </div>
        </div>
    </div>
  )
}

export default Cart