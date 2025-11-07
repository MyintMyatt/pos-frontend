import React from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { useState } from "react";
import { SubmitBtn } from "../../../component/common/SubmitBtn";

const MenuForm = () => {
    const [categories, setCategories] = useState([
        //value will be category id
        { value: "", label: "Select Category" },
    ]);
    const [uom, setUom] = useState([
        //value will be uom id
        { value: "", label: "Select Unit of Measure" },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: categories[0].value,
        uom: uom[0].value,
        stock: "",
        description: "",
    });

    const handleOnClick = () => {
        // Add your logic here
    };

    return (
        //Container
        <div className="py-2">
            {/*This is the form body */}
            <div className="flex flex-col justif gap-3">
                <CustomInput
                    type="text"
                    placeholder="Menu Name"
                    value={formData.name}
                    onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                    }}
                />
                <CustomInput
                    type="number"
                    placeholder="Price($)"
                    value={formData.price}
                    onChange={(e) => {
                        setFormData({ ...formData, price: e.target.value });
                    }}
                />
                <CustomDropdown
                    options={categories}
                    value={formData.category}
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                />
                <CustomDropdown
                    options={uom}
                    value={formData.uom}
                    onChange={(e) =>
                        setFormData({ ...formData, uom: e.target.value })
                    }
                />
                <CustomInput
                    type="number"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={(e) => {
                        setFormData({ ...formData, stock: e.target.value });
                    }}
                />
                <CustomInput
                    type="comments"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        });
                    }}
                />
                <SubmitBtn name="Create Menu" className={"py-2.5"} />
            </div>
        </div>
    );
};

export default MenuForm;
