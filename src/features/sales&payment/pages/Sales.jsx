import React, { useRef } from 'react'
import SearchBar from '../../../component/common/SearchBar'
import Dropdown from '../../../component/common/Dropdown'
import Pagination from '../../../component/common/Pagination';

const Sales = () => {
      const list = ["CARD", "CASH", "E-Money"];
      const Dref=useRef();

const HandleChange=(value)=>{console.log(value);
}
    
    
  return (
    <div>

        <SearchBar placeholder={"Search"} className={`w-fit`}/>
        <Dropdown onChange={HandleChange} placeholder={"Payment"} items={list} ref={Dref}/>


        <Pagination current={1} totalPages={10} />

    </div>
  )
}

export default Sales