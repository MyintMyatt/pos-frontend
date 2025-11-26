import MenuCard from "./MenuCard";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";

import Pagination from "../../../component/common/Pagination";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { setCategories, setMenu } from "../../../reducer/menuSlice";
import { useSelector } from "react-redux";
import { useGetCategory } from "../hooks/useGetCatgory";
import { useGetMenus } from "../../sales&payment/hooks/useGetMenus";

const MenuList = ({filteredProducts=[]}) => {


 
    
    return (
        <div className="h-full  px-4 py-2">
            <div className="flex justify-between">
                <SearchBar
                    onChange={(e) =>
                        setFilter((prev) => ({
                            ...prev,
                            search: e.target.value,
                        }))
                    }
                />
                <div>
                    {/* <Dropdown
                        items={data}
                        onChange={(value) =>
                            setFilter((prev) => ({
                                ...prev,
                                category: value,
                            }))
                        }
                        placeholder="Category"
                    /> */}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-1.5 h-3/4 mt-1.5 p-1.5">
                {filteredProducts.map((product) => (
                    <MenuCard
                        img={product.img || ""}
                        category={product.category}
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center relative -bottom-10">
                {/* <Pagination
                    totalPages={totalPages}
                    current={currentPage}
                    onPageChange={(pageNo) => setCurrentPage(pageNo)}
                /> */}
            </div>
        </div>
    );
};

export default MenuList;
