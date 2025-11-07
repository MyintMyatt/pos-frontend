import MenuCard from "./MenuCard";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";

import Pagination from "../../../component/common/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { categoryApi, menuApi } from "../api/menuService";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../reducer/menuSlice";
import { useSelector } from "react-redux";

const MenuList = () => {
    const dispatch = useDispatch();
    const category = [
        "All",
        ...useSelector((state) => state.menu.categories).map(
            (category) => category.categoryName,
        ),
    ];
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filter, setFilter] = useState({ search: "", category: "All" });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    //This will fetch categories
    useEffect(() => {
        categoryApi.fetchAllCategories().then((categories) => {
            dispatch(setCategories(categories.data.data));
        });
    }, [dispatch]);

    //This is to fetch all the menus
    useEffect(() => {
        // Function to fetch and set menus
        const fetchMenus = async () => {
            try {
                const menus = await menuApi.fetchAllMenus();
                const menuData = menus.data.data.content;
                if (menuData) {
                    const temp = menuData.map((item) => ({
                        id: item.menuId,
                        name: item.menuName,
                        price: item.price,
                        category: item.category.categoryName,
                        img: item.imageUrl,
                    }));
                    setProducts(temp);
                }
            } catch (error) {
                console.error(error);
            }
        };
        // Initial fetch
        fetchMenus();
        // Set interval to fetch every 10 seconds (10000ms)
        const intervalId = setInterval(fetchMenus, 10000);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []); // empty dependency array = run once on mount

    //This will calculate the total pages , manage filter and pagination
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
        const totalPages = Math.ceil(filteredData.length / 8);
        filteredData = filteredData.slice(
            (currentPage - 1) * 8,
            currentPage * 8,
        );
        setTotalPages(totalPages);
        setFilteredProducts(filteredData);
    }, [products, filter, currentPage]);

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
                        img={product.img || ""}
                        category={product.category}
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center relative -bottom-24">
                <Pagination
                    totalPages={totalPages}
                    current={currentPage}
                    onPageChange={(pageNo) => setCurrentPage(pageNo)}
                />
            </div>
        </div>
    );
};

export default MenuList;
