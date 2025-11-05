import React from "react";
import MenuCard from "./MenuCard";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";
import Pagination from "../../../component/common/Pagination";

const MenuList = () => {

const products = [
  // Food
  { id: "p1", name: "Cheese Burger", price: 20, category: "Food" },
  { id: "p2", name: "Chicken Pizza", price: 35, category: "Food" },
  { id: "p3", name: "Beef Steak", price: 50, category: "Food" },
  { id: "p4", name: "Grilled Chicken", price: 40, category: "Food" },
  { id: "p5", name: "Vegetable Salad", price: 12, category: "Food" },

  // Drink
  { id: "p6", name: "Iced Coffee", price: 8, category: "Drink" },
  { id: "p7", name: "Milk Tea", price: 5, category: "Drink" },
  { id: "p8", name: "Lemon Juice", price: 6, category: "Drink" },
 
];



  const category = ["Breakfast", "Lunch", "Dinner", "Drink"];
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" h-full px-4 py-2">
      <div className="flex justify-between">
        <SearchBar />
        <div>
          <Dropdown items={category} placeholder="Category" />
        </div>
      </div>

   <div className="grid grid-cols-4 gap-1.5 h-3/4 mt-1.5 p-1.5">
      {products.map((product)=>(
      <MenuCard img onClick={()=>handleAddToCart(product)} category={product.category} key={product.id} id={product.id} name={product.name} price={product.price} />
     ))}
   </div>



   <div className="flex justify-center items-center relative -bottom-24">
    <Pagination totalPages={5} current={1}/>
   </div>
    </div>
  );
};

export default MenuList;
