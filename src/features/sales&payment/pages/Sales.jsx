import React, { useRef, useState } from "react";
import MenuList from "../components/MenuList";
import Cart from "../components/Cart";
import { useGetMenus } from "../hooks/useGetMenus";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import { useSelector } from "react-redux";
import { useGetCategory } from "../../admin/hooks/useGetCatgory";


const Sales = () => {

  const {data:Cates=[]}=useGetCategory();

console.log(Cates);


const [page,setPage]=useState(1)


  const HandleChange = (value) => {
    console.log(value);
  };


  const {data,loading,error}=useGetMenus(page-1,"",40)
  console.log("itesm",data?.data.content);
  

  return (
    <div className="flex  justify-between h-full  w-full   ">
      <div className="w-9/12 h-full flex flex-col gap-4">
        <div className="flex gap-4 justify-between w-full">
          <SearchBar  />
          <Dropdown  />
        </div>
        <MenuList data={data?.data.content} />
      </div>

      <div className="w-3/12">
        <Cart />
      </div>
    </div>
  );
};

export default Sales;
