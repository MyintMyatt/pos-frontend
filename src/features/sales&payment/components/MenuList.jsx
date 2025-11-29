import { useEffect, useRef, useState } from "react";
import MenuCard from "./MenuCard";

import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import Pagination from "../../../component/common/Pagination";
import { useGetMenus } from "../hooks/useGetMenus";

const MenuList = ({ data = [] }) => {
  const [keyword, setKeyword] = useState("");

  const [currentPage, setCurentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  console.log("menuss", data);

  const products = data || [];
  const handleSearch = () => {
    const value = searchRef.current.value;

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setKeyword(value);
    }, 500);
  };

  console.log(totalPages);

  const category = ["Dessert", "Drink"];
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" h-full px-4 py-2">
      {/* <div className="flex justify-between">
        <SearchBar ref={searchRef} onChange={handleSearch} />
       
      </div> */}

      <div className="grid grid-cols-4 gap-1.5 h-3/4 mt-1.5 p-1.5">
        {products.map((product) => (
          <MenuCard
            onClick={() => handleAddToCart(product)}
            img={product.imageUrl}
            stock={product.inventory.quantity}
            category={product.category.categoryName}
            key={product.menuId}
            id={product.menuId}
            name={product.menuName}
            price={product.price}
          />
        ))}
      </div>

   
    </div>
  );
};

export default MenuList;
