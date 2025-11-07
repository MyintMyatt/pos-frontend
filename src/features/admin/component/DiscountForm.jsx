import React, { useState } from "react";
import CustomDropdown from "../../../component/common/CustomDropdown";
import CustomInput from "../../../component/common/CustomInput";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

const DiscountForm = () => {
  // Dropdown options
  const DiscountTypes = [
    { label: "Percentage", value: "percentage" },
    { label: "Fixed Amount", value: "fixed" },
  ];

  // Initialize form state
  const [formData, setFormData] = useState({
    discountType: "",
    discountValue: "",
    validFrom: "",
    validTo: "",
    userId: localStorage.getItem("userId") || "", // <-- get from localStorage
  });

  // Dynamic change handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.discountType) return alert("Discount Type is required");
    if (!formData.discountValue) return alert("Discount Value is required");
    if (!formData.validFrom) return alert("Valid From is required");
    if (!formData.validTo) return alert("Valid To is required");

    console.log("Discount Form Data:", formData);

    // TODO: Send formData to backend API
  };

  return (
    <form
      className="flex flex-col justify-around gap-4 w-full"
      onSubmit={handleSubmit}
    >
      {/* Discount Type */}
      <CustomDropdown
        placeholder="Select Discount Type"
        options={DiscountTypes}
        value={formData.discountType}
        onChange={(val) => handleChange("discountType", val)}
      />

      {/* Discount Value */}
      <CustomInput
        type="number"
        step="0.01"
        placeholder="Enter Discount Value"
        value={formData.discountValue}
        onChange={(e) => handleChange("discountValue", e.target.value)}
      />

      {/* Valid Date Range */}
      <CustomInput
        type="date"
        placeholder="Valid From"
        value={formData.validFrom}
        onChange={(e) => handleChange("validFrom", e.target.value)}
      />

      <CustomInput
        type="date"
        placeholder="Valid To"
        value={formData.validTo}
        onChange={(e) => handleChange("validTo", e.target.value)}
      />

      {/* Submit Button */}
      <SubmitBtn type="submit" name="SAVE DISCOUNT" className="py-2" />
    </form>
  );
};

export default DiscountForm;
