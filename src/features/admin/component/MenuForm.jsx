import React, { useState, useRef } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { Image, Upload } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useMenu } from "../hooks/useMenu";
import { closePopup } from "../../../reducer/popupSlice";

const MenuForm = () => {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);

  const allCategories = useSelector(
    (state) => state.menu?.categories ?? []
  );

  const categories = allCategories.map((category) => ({
    value: category.categoryId,
    label: category.categoryName,
  }));




  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: categories[0]?.value ?? "",
    uom: "Qty",
    stock: "",
    description: "",
    imageFile: null,
  });

  const handleOnImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImg(file);
    
    
    toast.success("Image selected!");
  };
console.log(img);


const imgData=new FormData()
imgData.append("imgSe",imgData)
console.log(imgData);


  const { submitMenu, data:menuId, loading, err } = useMenu();



  const {data}=useUploadMenu()



  

  const handleSubmit = async (e) => {
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
    };
    
    await submitMenu(payload);
console.log("SUCC");







    if (img && menuId  ) {
        console.log("Upoading Img");
        console.log("IMG",img);
        
      const file = new FormData();
      file.append("file", img);



      try {
        await uplad=
        toast.success("Image uploaded successfully!");
      } catch (err) {
        toast.error("Menu created, but image upload failed");
      }
    }
    dispatch(closePopup())
    toast.success("Menu created successfully!");
  };

  return (
    <div className="py-2">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            {img ? img.name : "Drop / Select Image"}
          </div>
          <input
            type="file"
            ref={imageInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleOnImageChange}
          />
        </div>

        <SubmitBtn name="Create Menu" className="py-2.5" />
      </form>
    </div>
  );
};

export default MenuForm;
