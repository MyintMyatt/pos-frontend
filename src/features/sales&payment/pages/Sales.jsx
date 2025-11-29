import React, { useEffect, useRef, useState } from "react";
import MenuList from "../components/MenuList";
import Cart from "../components/Cart";
import { useGetMenus } from "../hooks/useGetMenus";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategory } from "../../admin/hooks/useGetCatgory";
import { clearRefresh, setCategories } from "../../../reducer/menuSlice";
import CustomDropdown from "../../../component/common/CustomDropdown";
import Pagination from "../../../component/common/Pagination";


const Sales = () => {

const [categoryId,setCategoryId]=useState();


const dispatch=useDispatch();
const {needsRefresh}=useSelector(state=>state.menu);

  const {data:categoryData}=useGetCategory();



const categories = [
  { value: "", label: "ALL" }, 
  ...categoryData?.data.map((category) => ({
    value: category.categoryId,
    label: category.categoryName,
  })) || []
];


  useEffect(() => {
    if (categoryData?.data) {
      dispatch(setCategories(categoryData.data));
    }
  }, [categoryData, dispatch]);

const [page,setPage]=useState(1);
const [keyword,setKeyword]=useState(null);
const [debouncedKeyword,setDebouncedKeyword]=useState(null);
const [totalPages,setTotalPages]=useState(1)




const size=8


useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // Cleanup if keyword changes before timeout
  }, [keyword]);




  const {data,loading,error,reFetch}=useGetMenus(page-1,keyword,8,categoryId)
  console.log("itesm",data?.data.content);

    // ✅ Update total pages only when menus load
  useEffect(() => {
    if (data?.data.totalPages) {
      setTotalPages(data?.data.totalPages);
    }
  }, [data]);

  const onPageChange = (newPage) => {
    setPage(newPage);
  };


  
  useEffect(() => {
    if (needsRefresh) {
      reFetch();
      dispatch(clearRefresh());
    }
  }, [needsRefresh]);
  

  return (
    <div className="flex  justify-between h-full  w-full   ">
      <div className="w-9/12 h-full flex flex-col gap-4">
        <div className="flex gap-4 justify-between w-full">
         <SearchBar
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />
          <CustomDropdown options={categories} onChange={(value)=>setCategoryId(value)} value={categoryId}
           placeholder={"Select Category"} />
        </div>
        <MenuList data={data?.data.content} />
           <div className="flex justify-center items-center relative bottom-8">
        <Pagination
          totalPages={totalPages}
          current={page}
          onPageChange={onPageChange}
        />
      </div>
      </div>

      <div className="w-3/12">
        <Cart />
      </div>
    </div>
  );
};

export default Sales;
