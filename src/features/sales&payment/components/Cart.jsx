import React from 'react'
import { getDate } from '../../../utils/getCurrentDate'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = () => {
  const cartItems=useSelector((state)=>state.cart.products)

 const date=getDate();
 console.log(cartItems);
 
 

  return (
    <div className=' bg-gray-50 h-full'>
      <div className='text-center'>
{date}
      </div>
      {cartItems.map((item)=>(
           <CartItem key={item.id} No={item.id} name={item.name}  price={20}/>
      ))}
   
    </div>
  )
}

export default Cart