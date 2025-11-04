import React from "react";
import MenuCard from "./MenuCard";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

const MenuList = () => {
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

      <MenuCard
        id={"p1"}
        name={"Hambarger"}
        category={"Snack"}
        price={20}
        onClick={()=>handleAddToCart({ id: "p1", name: "Hambarger", price: 20 })}
        img={"https://placehold.co/200"}
      />
    </div>
  );
};

export default MenuList;
