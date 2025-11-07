import React from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { useState } from "react";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { Image } from "lucide-react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { menuApi } from "../api/menuService";
import { useDispatch } from "react-redux";
import { setSuccessPopUp } from "../../../reducer/menuSlice";
import { closePopup } from "../../../reducer/popupSlice";
const MenuForm = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.menu.categories);
    const categories = [
        ...allCategories.map((category) => ({
            value: category.categoryId,
            label: category.categoryName,
        })),
    ];
    const uom = [{ value: "Qty", label: "Qty" }];
    const imageInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: categories[0].value,
        uom: uom[0].value,
        stock: "",
        description: "",
        imageFile: null,
    });
    const handleOnImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            imageFile: file,
        });
    };
    ///Change Here
    const handleOnSubmit = (e) => {
        e.preventDefault();
        menuApi
            .createMenu({
                menuName: formData.name,
                price: formData.price,
                categoryId: formData.category,
                uom: formData.uom,
                quantity: formData.quantity,
                description: formData.description,
                createdBy: "UID25110001",
                movementType: "RESTOCK",
            })
            .then((response) => {
                console.log("Success");
                console.log(response);
                setFormData({
                    name: "",
                    price: "",
                    category: categories[0].value,
                    uom: uom[0].value,
                    stock: "",
                    description: "",
                });
                dispatch(closePopup());
                dispatch(setSuccessPopUp(true));
                if (formData.imageFile !== null) {
                    const imageData = new FormData();
                    imageData.append("file", formData.imageFile);
                    menuApi.uploadImage(response.data.data.menuId, imageData);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        //Container
        <div className="py-2">
            {/*This is the form body */}
            <form
                className="flex flex-col justif gap-3"
                onSubmit={handleOnSubmit}
            >
                <CustomInput
                    type="text"
                    placeholder="Menu Name*"
                    value={formData.name}
                    onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                    }}
                    required
                />
                <CustomInput
                    type="number"
                    placeholder="Price($)*"
                    value={formData.price}
                    onChange={(e) => {
                        setFormData({ ...formData, price: e.target.value });
                    }}
                    required
                />
                <CustomDropdown
                    options={categories}
                    value={formData.category}
                    placeholder="Select Category*"
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            category: value,
                        })
                    }
                />
                <CustomDropdown
                    options={uom}
                    value={formData.uom}
                    placeholder="Select Unit of Measure*"
                    onChange={(value) =>
                        setFormData({ ...formData, uom: value })
                    }
                />
                <CustomInput
                    type="number"
                    placeholder="Stock*"
                    value={formData.stock}
                    onChange={(e) => {
                        setFormData({ ...formData, stock: e.target.value });
                    }}
                    required
                />
                <CustomInput
                    type="comments"
                    placeholder="Description*"
                    value={formData.description}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        });
                    }}
                    required
                />
                <div className="flex w-full border border-slate-300 items-center justify-center p-2 hover:bg-slate-100">
                    <button
                        type="button"
                        className="flex flex-col items-center justify-center w-full h-full text-slate-500"
                        onClick={() => imageInputRef.current.click()}
                    >
                        <Image />
                        Drop Your Image Here
                    </button>
                    <input
                        type="file"
                        ref={imageInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handleOnImageChange}
                    />
                </div>
                <SubmitBtn name="Create Menu" className={"py-2.5"} />
            </form>
        </div>
    );
};

export default MenuForm;
