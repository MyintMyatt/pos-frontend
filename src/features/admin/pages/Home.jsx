import React from 'react'
import SearchBar from '../../../component/common/SearchBar'
import Dropdown from '../../../component/common/Dropdown'
import { popupInstance } from '../../../constant/enum'
import FloatBtn from '../../../component/common/FloatBtn'
import { useDispatch } from 'react-redux'
import { openPopup } from '../../../reducer/popupSlice'

const Home = () => {
   const dispatch = useDispatch();

  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };

  return (
      <div>
      <header className="flex justify-between">
        <SearchBar />
        <Dropdown />
    
      </header>

      {/* LIST VIEW */}
      <div>
        <div></div>
      </div>

      {/* Call to action  */}
      <div className="absolute bottom-4 right-6">
        <FloatBtn onClick={() => handlePopup(popupInstance.DISCOUNT)} />
      </div>
    </div>
  )
}

export default Home