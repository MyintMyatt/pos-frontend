import MenuCard from "./MenuCard";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";

import Pagination from "../../../component/common/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { categoryApi, menuApi } from "../api/menuService";
const MenuList = () => {
    const category = ["All", "Breakfast", "Lunch", "Dinner", "Drink"];
    const [products, setProducts] = useState([
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
    ]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filter, setFilter] = useState({ search: "", category: "All" });
    useEffect(() => {
        categoryApi.fetchAllCategories().then((categories) => {
            console.log(categories);
        });
    }, []);

    useEffect(() => {
        const value = filter.search;
        const category = filter.category;
        let filteredData = products;
        if (category != "All") {
            filteredData = products.filter(
                (product) => product.category === category,
            );
        }
        if (value !== "") {
            filteredData = filteredData.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase()),
            );
        }
        setFilteredProducts(filteredData);
    }, [products, filter]);

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
                    <Dropdown
                        items={category}
                        onChange={(value) =>
                            setFilter((prev) => ({
                                ...prev,
                                category: value,
                            }))
                        }
                        placeholder="Category"
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-1.5 h-3/4 mt-1.5 p-1.5">
                {filteredProducts.map((product) => (
                    <MenuCard
                        img
                        category={product.category}
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center relative -bottom-24">
                <Pagination totalPages={5} current={1} />
            </div>
        </div>
    );
};

export default MenuList;
