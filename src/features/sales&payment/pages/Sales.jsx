import React, { useRef, useState } from "react";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import Pagination from "../../../component/common/Pagination";
import MenuList from "../components/MenuList";
import Cart from "../components/Cart";
import { useGetMenus } from "../hooks/useGetMenus";

const Sales = () => {

const [page,setPage]=useState(1)

  const list = ["CARD", "CASH", "E-Money"];
  const Dref = useRef();

  const HandleChange = (value) => {
    console.log(value);
  };


  const {data,loading,error}=useGetMenus(page-1,"",8)
  console.log("itesm",data?.data.content);
  

  return (
    <div className="flex  justify-between h-full  w-full   ">
      <div className="w-9/12 h-full">
        <MenuList data={data?.data.content} />
      </div>

      <div className="w-3/12">
        <Cart />
      </div>
    </div>
  );
};

export default Sales;
