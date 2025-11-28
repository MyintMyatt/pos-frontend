import AnimationData from "@/assets/Success.json";
import Lottie from "lottie-react";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import MenuList from "../component/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { clearRefresh, setCategories } from "../../../reducer/menuSlice";
import { useGetCategory } from "../hooks/useGetCatgory";
import { useGetMenus } from "../../sales&payment/hooks/useGetMenus";
import SearchBar from "../../../component/common/SearchBar";
import Pagination from "../../../component/common/Pagination";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { useEffect, useState } from "react";

const Menu = () => {

  const dispatch = useDispatch();
  const { needsRefresh } = useSelector(state => state.menu)

  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
    const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const[categoryId,setCategoryId]=useState(null)
  const size = 8;

  const [totalPages, setTotalPages] = useState(1);

   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500); // 500ms delay

    return () => clearTimeout(handler); // Cleanup if keyword changes before timeout
  }, [keyword]);

  const { data: categoryData } = useGetCategory();
  const { data: menus, loading,reFetch } = useGetMenus(page - 1, keyword, size,categoryId);


  const [loadingState, setLoadingState] = useState(true);

useEffect(() => {
  if (!loading) {
    const timer = setTimeout(() => setLoadingState(false), 1000); // 1s min
    return () => clearTimeout(timer);
  } else {
    setLoadingState(true);
  }
}, [loading]);



useEffect(() => {
  if (needsRefresh) {
    reFetch();
    dispatch(clearRefresh());
  }
}, [needsRefresh]);

console.log(categoryData);
const categories = [
  { value: "", label: "ALL" }, // <-- Added ALL option
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

  // ✅ Update total pages only when menus load
  useEffect(() => {
    if (menus?.data?.totalPages) {
      setTotalPages(menus.data.totalPages);
    }
  }, [menus]);

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePopup = () => {
    dispatch(openPopup(popupInstance.MENU));
  };

  return (
    <div className="h-screen relative px-4 py-2">
      <div className="flex justify-between">
        <SearchBar
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />
        <CustomDropdown placeholder={"Select Category"} value={categoryId} onChange={(value)=>setCategoryId(value)} options={categories}  />
      </div>

      <MenuList 
        filteredProducts={menus?.data?.content} 
        loading={loadingState} 
      />

      <div className="absolute bottom-20 left-2/5">
        <Pagination 
          totalPages={totalPages} 
          current={page} 
          onPageChange={onPageChange} 
        />
      </div>

      <div className="absolute bottom-25 right-10">
        <FloatBtn onClick={handlePopup} />
      </div>
    </div>
  );
};

export default Menu;
