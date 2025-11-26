import { useDispatch, useSelector } from "react-redux";
import { useInventory } from "../hooks/useInventory";
import { useGetCategory } from "../hooks/useGetCatgory";
import { useEffect, useState } from "react";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import CustomDropdown from "../../../component/common/CustomDropdown";
import CustomInput from "../../../component/common/CustomInput";
import toast from "react-hot-toast";

const InventoryForm = () => {
  const dispatch = useDispatch();
  
  const { data, loading, err, submitInventory } = useInventory();
  const { data: categories = [] } = useGetCategory();

  const allCategories = categories?.data || [];
  const allMenu = useSelector((state) => state.menu.menu);

  const CategoryOptions = allCategories.map((category) => ({
    value: category.categoryId,
    label: category.categoryName,
  }));

  const TypeOptions = [
    { label: "RESTOCK", value: "RESTOCK" },
    { label: "DAMAGE", value: "DAMAGE" },
  ];

  const [formData, setFormData] = useState({
    category: "",
    menu: "",
    type: "",
    updatedStock: "",
    currentQty: "",
    uomQty: "Qty",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const filteredMenu = allMenu
    .filter((menu) => menu.category.categoryId === formData.category)
    .map((menu) => ({ value: menu.menuId, label: menu.menuName }));

  useEffect(() => {
    const selectedMenu = allMenu.find(
      (menu) => menu.menuId === formData.menu
    );
    setFormData((prev) => ({
      ...prev,
      currentQty: selectedMenu?.stockQty || "",
    }));
  }, [formData.menu, allMenu]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      uomQty: prev.currentQty || "Qty",
    }));
  }, [formData.currentQty]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.category) return toast.error("Category is required");
    if (!formData.menu) return toast.error("Menu is required");
    if (!formData.updatedStock) return toast.error("Updated Stock is required");

    const payload = {
      menuId: formData.menu,
      movementType: formData.type.toUpperCase(),
      quantity: Number(formData.updatedStock),
      uom: "Qty",
    };


    console.log(payload);
    
console.log("UPDATE...");

    try {
      console.log("HER");
      

      await submitInventory(payload);

      if(data){ toast.success("Update Success");}
     
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <form className="flex flex-col justify-around gap-4 w-full" onSubmit={handleSubmit}>
      <CustomDropdown
        placeholder="Select Category"
        options={CategoryOptions}
        value={formData.category}
        onChange={(val) => handleChange("category", val)}
      />

      <CustomDropdown
        placeholder="Select Menu"
        options={filteredMenu}
        value={formData.menu}
        onChange={(val) => handleChange("menu", val)}
      />

      <div className="flex w-full gap-x-3">
        <CustomDropdown
          className="w-full"
          placeholder="Select Type"
          options={TypeOptions}
          value={formData.type}
          onChange={(val) => handleChange("type", val)}
        />
      </div>

      <div className="flex gap-x-3 w-full">
        <CustomInput
          className="w-full"
          type="number"
          placeholder="Enter Updated Stock"
          value={formData.updatedStock}
          onChange={(e) => handleChange("updatedStock", e.target.value)}
        />
      </div>

      <SubmitBtn type="submit" name="UPDATE" className="py-2" />
    </form>
  );
};

export default InventoryForm;
