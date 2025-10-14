import { Filter } from "lucide-react";
import { forwardRef, useRef, useState } from "react";

const Dropdown = forwardRef(({ placeholder, props,onChange, items=[]}, ref) => {
  const [isOpen, setisOpen] = useState(false);
  const handleCollapse = () => {
    setisOpen(!isOpen);
  };

  const [selected, setSelected] = useState(null);



  const handleItem = (value) => {
    setSelected(value);
    
    setisOpen(false);
    if(onChange)  onChange(value)
  };

  return (
    <>
      <button
        onClick={handleCollapse}
        className={`border border-slate-900 rounded-md w-fit cursor-pointer`}
        
        {...props}
      >
        <div className="flex gap-x-2.5 px-4 py-2">
          <Filter />
          <span className="text-slate-900/50">
            {selected ? (
              <span className="text-slate-950 font-medium">{selected}</span>
            ) : (
              placeholder
            )}
          </span>
        </div>
      </button>
      <ul
        className={`
    absolute mt-1 bg-slate-900/90 flex flex-col gap-y-1 rounded-md 
    text-white w-32 px-2 py-2 shadow-lg transition-all duration-200 ease-in-out 
    origin-top 
    ${
      isOpen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }
  `}
      >
        {items.map((item, index) => (
          <li
          ref={ref}
            key={index}
            onClick={() => handleItem(item)}
            className="px-3 py-1.5 rounded-md hover:bg-slate-700 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
});

export default Dropdown;
