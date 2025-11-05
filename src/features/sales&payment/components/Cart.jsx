import React from 'react'
import { getDate } from '../../../utils/getCurrentDate'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addQty, removeQty } from '../reducers/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const totalAmt=useSelector((state)=>state.cart.totalAmt)

  const handleMinus = (id) => {
    dispatch(removeQty(id));
  };

  const handlePlus = (id) => {
    dispatch(addQty(id));
  };

  const date = getDate();

  return (
    <div className='bg-gray-50 h-full'>
      <div className='text-center'>{date}</div>

<div className='h-2/4  bg-red-300'>
        {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.totalPrice}
          qty={item.qty}
          handleMinus={() => handleMinus(item.id)}
          handlePlus={() => handlePlus(item.id)}
        />
      ))}
</div>

{/* Total & Tax */}
<div className='w-full px-2 flex flex-col gap-2' >
  <div className='flex justify-between'>
    <h2>SubTotal</h2>
    <span>${totalAmt}</span>
  </div>
  <div className='flex justify-between'>
       <h2>Tax</h2>
    <span>2%</span>
  </div>
  <div>Total</div>

</div>


      <div></div>
    </div>
  );
};

export default Cart;
