import React from 'react'

const Popup = ({children,className,close}) => {
  return (
    <div className='shadow-md shadow-gray-300 '>
     <header>
        <button>X</button>
     </header>
    </div>
  )
}

export default Popup