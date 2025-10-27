import React, { useRef } from 'react'
import SearchBar from '../../../component/common/SearchBar'
import Dropdown from '../../../component/common/Dropdown'
import Pagination from '../../../component/common/Pagination';
import MenuList from '../components/MenuList';
import Cart from '../components/Cart';

const Sales = () => {
      const list = ["CARD", "CASH", "E-Money"];
      const Dref=useRef();

const HandleChange=(value)=>{console.log(value);
}
    
    
  return (
    <div className='flex  justify-between h-full  w-full   '>

       <div className='w-9/12 h-full'>
       
        <MenuList />
       </div>

       <div className='w-3/12'>
        
        <Cart />
       </div>

    


    </div>
  )
}

export default Sales