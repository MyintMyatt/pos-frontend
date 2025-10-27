import React from 'react'
import MenuCard from './MenuCard'
import SearchBar from '../../../component/common/SearchBar'
import Dropdown from '../../../component/common/Dropdown'

const MenuList = () => {

    const category=["Breakfast","Lunch","Dinner","Drink"]
  return (
    <div className=' h-full px-4 py-2'> 


    <div className='flex justify-between'>
        <SearchBar />
       <div>
         <Dropdown items={category} placeholder="Category" />
       </div>
    </div>

    <MenuCard name={"Hambarger"} category={"Snack"} price={"$20"} img={"https://placehold.co/200"}  />


    </div>
  )
}

export default MenuList