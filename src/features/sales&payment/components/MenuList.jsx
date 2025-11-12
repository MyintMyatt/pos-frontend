import{ useEffect, useRef, useState } from "react";
import MenuCard from "./MenuCard";

import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";


import { fetchAllMenus } from "../../admin/api/menuService";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import Pagination from "../../../component/common/Pagination";

const MenuList = () => {
const [keyword, setKeyword] = useState("");
const searchRef = useRef(null);
const debounceRef = useRef(null);

const handleSearch = () => {



  const value = searchRef.current.value;

  clearTimeout(debounceRef.current);
  debounceRef.current = setTimeout(() => {
    setKeyword(value);
  }, 500);
};


  const [products,setProducts]=useState([]);
   const [currentPage,setCurentPage]=useState(1);


const [totalPages,setTotalPages]=useState(0);



   console.log(totalPages);
   


useEffect(() => {
  const loadData = async () => {
    try {
      const response = await fetchAllMenus({
      
        page:currentPage-1,
        size: 8,
        keyword:keyword,
      });

      console.log("RESPONSE", response);

     
      if (response.status === 200) {
       console.log("PAGES",response.data.totalPages);
       
        
        setTotalPages(response.data.totalPages);
        setProducts(response.data.content); 
      }

    } catch (error) {
      console.error(error);
    }
  };

  loadData();
}, [keyword,currentPage]);


console.log(keyword);






  const category = [ "Dessert", "Drink"];
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" h-full px-4 py-2">
      <div className="flex justify-between">
        <SearchBar ref={searchRef} onChange={handleSearch} />
        <div>
          {/* <Dropdown items={category} placeholder="Category" /> */}
        </div>
      </div>

   <div className="grid grid-cols-4 gap-1.5 h-3/4 mt-1.5 p-1.5">
      {products.map((product)=>(
      <MenuCard  onClick={()=>handleAddToCart(product)} 
      img={product.imageUrl} category={product.category.categoryName} key={product.menuId} id={product.menuId} name={product.menuName} price={product.price} />
     ))}
   </div>



   <div className="flex justify-center items-center relative -bottom-24">
    <Pagination totalPages={totalPages} current={currentPage} onPageChange={(newPage)=>setCurentPage(newPage)}/>
   </div>
    </div>
  );
};

export default MenuList;
