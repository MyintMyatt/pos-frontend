import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import MenuActionCard from "./MenuActionCard";
import { useDeleteMenu } from "../hooks/useDeleteMenu";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { triggerRefresh } from "../../../reducer/menuSlice";
import MenuCardSkeletonList from "./MenuSkeletonList";

const MenuList = ({ filteredProducts = [], loading }) => {
  const { deleteMenuById, loading: delLoading } = useDeleteMenu();
  const dispatch = useDispatch();

  // Delete Handler
  const onDelete = async (id) => {
    const toastId = toast.loading("Deleting...");

    try {
      const response = await deleteMenuById(id);
      console.log(response?.status);

      if (response?.status === 200) {
        toast.success("Delete success");
        dispatch(triggerRefresh());
      }
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="h-full px-4 py-2">
      {/* Top Filter / Search Section (optional) */}
      <div className="flex justify-between mb-3">
        <div>{/* Future Category dropdown here */}</div>
      </div>

      {/* Menu Cards */}
      {loading ? (
        <MenuCardSkeletonList />
      ) : (
        <div className="grid grid-cols-4 gap-2 h-3/4">
          {filteredProducts.map((product) => (
            <MenuActionCard
              key={product.menuId}
              id={product.menuId}
              name={product.menuName}
              price={product.price}
              img={product.imageUrl || ""}
              category={product.category.categoryName}
              stock={product.inventory.quantity}
              delLoading={delLoading}
              onDelete={() => onDelete(product.menuId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
