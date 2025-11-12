import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomDropdown from "../../../component/common/CustomDropdown";
import CustomInput from "../../../component/common/CustomInput";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { adjust } from "../api/inventoryService";
import toast from "react-hot-toast";
import { closePopup } from "../../../reducer/popupSlice";

const InventoryForm = () => {
  const dispatch = useDispatch();

  // Redux state
  const allCategories = useSelector((state) => state.menu.categories);
  const allMenu = useSelector((state) => state.menu.menu);

  // Dropdown options
  const CategoryOptions = allCategories.map((category) => ({
    value: category.categoryId,
    label: category.categoryName,
  }));

  const TypeOptions = [
    { label: "RESTOCK", value: "RESTOCK" },
    { label: "DAMAGE", value: "DAMAGE" },
  ];

  const userID = localStorage.getItem("userId");

  // Form state
  const [formData, setFormData] = useState({
    category: "",
    menu: "",
    type: "",
    currentQty: "",
    updatedStock: "",
    uomQty: "Qty",
    userId: userID,
  });

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Filter menus based on selected category
  const filteredMenu = allMenu
    .filter((menu) => menu.category.categoryId === formData.category)
    .map((menu) => ({ value: menu.menuId, label: menu.menuName }));

  // Auto-update currentQty when menu changes
  useEffect(() => {
    const selectedMenu = allMenu.find((menu) => menu.menuId === formData.menu);
    if (selectedMenu) {
      setFormData((prev) => ({
        ...prev,
        currentQty: selectedMenu.stockQty || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, currentQty: "" }));
    }
  }, [formData.menu, allMenu]);

  // Auto-update uomQty based on currentQty
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      uomQty: prev.currentQty || "Qty",
    }));
  }, [formData.currentQty]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.category) return toast.error("Category is required");
    if (!formData.menu) return toast.error("Menu is required");
    if (!formData.updatedStock) return toast.error("Updated Stock is required");

    const payload = {
      menuId: formData.menu,
      movementType: formData.type?.toUpperCase() || "SALE",
      quantity: Number(formData.updatedStock),
      uom: "Qty",
      createdBy: userID || "unknown",
    };

    try {
      const response = await adjust(payload);

      if (response.status===200) {
        toast.success("Inventory updated successfully!");

        // Reset form
        setFormData({
          category: "",
          menu: "",
          type: "",
          currentQty: "",
          updatedStock: "",
          uomQty: "Qty",
          userId: userID,
        });

        // Close popup if applicable
        dispatch(closePopup());
      } else {
        toast.error("Failed to update inventory.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
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
        {/* <CustomInput
          className="w-1/2"
          placeholder="Current Qty"
          value={formData.currentQty}
          disabled
        /> */}
      </div>

      <div className="flex gap-x-3 w-full">
        <CustomInput
          className="w-full"
          type="number"
          placeholder="Enter Updated Stock"
          value={formData.updatedStock}
          onChange={(e) => handleChange("updatedStock", e.target.value)}
        />
        {/* <CustomInput type="text" disabled value={formData.uomQty} placeholder="Qty" /> */}
      </div>

      <SubmitBtn type="submit" name="UPDATE" className="py-2" />
    </form>
  );
};

export default InventoryForm;
