import React, { useState, useEffect } from "react";
import CustomDropdown from "../../../component/common/CustomDropdown";
import CustomInput from "../../../component/common/CustomInput";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

const InventoryForm = () => {
  // Dropdown options
  const Category = [
    { label: "FOOD", value: "food" },
    { label: "DRINK", value: "drink" },
  ];

  const Menu = [{ label: "COLA", value: "cola" }];

  const Type = [
    { label: "RESTOCK", value: "restock" },
    { label: "DAMAGE", value: "damage" },
  ];

  // Single state for form
  const [formData, setFormData] = useState({
    category: "",
    menu: "",
    type: "",
    currentQty: "",
    updatedStock: "",
    uomQty: "QTY",
  });

  // Handle input changes dynamically
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Auto-update uomQty based on currentQty
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      uomQty: prev.currentQty || "QTY",
    }));
  }, [formData.currentQty]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.category) return alert("Category is required");
    if (!formData.menu) return alert("Menu is required");
    if (!formData.currentQty) return alert("Current Qty is required");
    if (!formData.updatedStock) return alert("Updated Stock is required");

    console.log("Form Data:", formData);

    // TODO: Send formData to backend API
  };

  return (
    <form
      className="flex flex-col justify-around gap-4 w-full"
      onSubmit={handleSubmit}
    >
      {/* Category Dropdown */}
      <CustomDropdown
        placeholder="Select Category"
        options={Category}
        value={formData.category}
        onChange={(val) => handleChange("category", val)}
      />

      {/* Menu Dropdown */}
      <CustomDropdown
        placeholder="Select Menu"
        options={Menu}
        value={formData.menu}
        onChange={(val) => handleChange("menu", val)}
      />

      {/* Type & Current Qty */}
      <div className="flex gap-x-3 w-full">
        <CustomDropdown
          className="w-1/2"
          placeholder="Select Type"
          options={Type}
          value={formData.type}
          onChange={(val) => handleChange("type", val)}
        />
        <CustomInput
          className="w-1/2"
          placeholder="Enter Current Qty"
          value={formData.currentQty}
          disabled
          onChange={(e) => handleChange("currentQty", e.target.value)}
        />
      </div>

      {/* Updated Stock & UOM Qty */}
      <div className="flex gap-x-3 items-center">
        <CustomInput
          type="number"
          placeholder="Enter Updated Stock"
          value={formData.updatedStock}
          onChange={(e) => handleChange("updatedStock", e.target.value)}
        />
        <CustomInput
          type="text"
          disabled
          value={formData.uomQty}
          placeholder="QTY"
        />
      </div>

      {/* Submit Button */}
      <SubmitBtn type="submit" name="UPDATE" className="py-2" />
    </form>
  );
};

export default InventoryForm;
