import { ChevronLeft, ChevronRight } from "lucide-react"

const ArrowBtn = ({placeholder,props,className}) => {
  return (
    <button {...props}  className={`bg-gray-800 cursor-pointer  rounded-sm text-white w-fit p-2 disabled:cursor-not-allowed ' ${className}`} >
           
    {placeholder}
    </button>
  )
}



const Pagination = ({totalPages,current,onPageChange}) => {







  return (
    <div className='flex gap-x-8'>

<ArrowBtn placeholder={<ChevronLeft />} disabled={current===1}/>

<div className='flex items-center'>{current} of {totalPages}</div>

<ArrowBtn placeholder={<ChevronRight/>} disabled={current===totalPages}/>



    </div>
  )
}

export default Pagination