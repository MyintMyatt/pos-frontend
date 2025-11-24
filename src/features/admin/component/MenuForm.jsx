import React, { useState, useRef } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { Image } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
// import { menuApi } from "../api/menuService";
import { setSuccessPopUp } from "../../../reducer/menuSlice";
import { closePopup } from "../../../reducer/popupSlice";
import toast from "react-hot-toast";

const MenuForm = () => {
    const dispatch = useDispatch();
    const imageInputRef = useRef(null);

    const allCategories = useSelector((state) => state.menu.categories);

    const categories = allCategories.map((category) => ({
        value: category.categoryId,
        label: category.categoryName,
    }));

    const uom = [{ value: "Qty", label: "Qty" }];

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: categories[0]?.value ?? "",
        uom: uom[0].value,
        stock: "",
        description: "",
        imageFile: null,
    });

    const handleOnImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFormData({ ...formData, imageFile: file });
        toast.success("Image selected!");
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.price || !formData.stock) {
            toast.error("Fill all required fields");
            return;
        }

        const payload = {
            menuName: formData.name,
            price: formData.price,
            categoryId: formData.category,
            uom: formData.uom,
            quantity: formData.stock,
            description: formData.description,
            createdBy: "UID25110001",
            movementType: "RESTOCK",
        };

        try {
            const response = await menuApi.createMenu(payload);

            toast.success("Menu Created Successfully ✅");

            // Upload image if exists
            if (formData.imageFile) {
                const imageData = new FormData();
                imageData.append("file", formData.imageFile);
                await menuApi.uploadImage(response.data.data.menuId, imageData);
                toast.success("Image Uploaded ✅");
            }

            setFormData({
                name: "",
                price: "",
                category: categories[0]?.value ?? "",
                uom: uom[0].value,
                stock: "",
                description: "",
                imageFile: null,
            });

            dispatch(closePopup());
            dispatch(setSuccessPopUp(true));
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to Create Menu ❌");
            console.log(error);
        }
    };

    return (
        <div className="py-2">
            <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
                <CustomInput
                    type="text"
                    placeholder="Menu Name*"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    required
                />

                <CustomInput
                    type="number"
                    placeholder="Price($)*"
                    value={formData.price}
                    onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                    }
                    required
                />

                <CustomDropdown
                    options={categories}
                    value={formData.category}
                    placeholder="Select Category*"
                    onChange={(value) =>
                        setFormData({ ...formData, category: value })
                    }
                />

                <CustomDropdown
                    options={uom}
                    value={formData.uom}
                    onChange={(value) =>
                        setFormData({ ...formData, uom: value })
                    }
                />

                <CustomInput
                    type="number"
                    placeholder="Stock*"
                    value={formData.stock}
                    onChange={(e) =>
                        setFormData({ ...formData, stock: e.target.value })
                    }
                    required
                />

                <CustomInput
                    type="text"
                    placeholder="Description*"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                    required
                />

                {/* Image Upload */}
                <div
                    className="flex w-full border border-slate-300 items-center justify-center p-2 hover:bg-slate-100 cursor-pointer"
                    onClick={() => imageInputRef.current.click()}
                >
                    <div className="flex flex-col items-center text-slate-500">
                        <Image />
                        {formData.imageFile ? formData.imageFile.name : "Drop / Select Image"}
                    </div>
                    <input
                        type="file"
                        ref={imageInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handleOnImageChange}
                    />
                </div>

                <SubmitBtn  name="Create Menu" className="py-2.5" />
            </form>
        </div>
    );
};

export default MenuForm;
