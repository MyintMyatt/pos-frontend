import React, { useState, useRef } from "react";
import CustomInput from "../../../component/common/CustomInput";
import CustomDropdown from "../../../component/common/CustomDropdown";
import { SubmitBtn } from "../../../component/common/SubmitBtn";
import { Image } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useMenu } from "../hooks/useMenu";
import { useUpload } from "../hooks/useUploadMenu";
import { closePopup } from "../../../reducer/popupSlice";
import { useGetMenus } from "../../sales&payment/hooks/useGetMenus";
import { triggerRefresh } from "../../../reducer/menuSlice";


const MenuForm = () => {



  const dispatch = useDispatch();
  const [btnLoad,setBtnLoad]=useState(false);
  const imageInputRef = useRef(null);
  const [img, setImg] = useState(null);
    



  // Fetch categories
  const allCategories = useSelector((state) => state.menu?.categories ?? []);
  const categories = allCategories.map((category) => ({
    value: category.categoryId,
    label: category.categoryName,
  }));

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: categories[0]?.value ?? "",
    uom: "Qty",
    stock: "",
    description: "",
  });
const fetchMenu=useGetMenus()
  const { submitMenu,loading:menuLoading,reFetch } = useMenu();
  const { uploadImg,loading } = useUpload();

  // Handle image selection
  const handleOnImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImg(file);
    toast.success("Image selected!");
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.stock) {
      toast.error("Fill all required fields");
      return;
    }

    setBtnLoad(true);


    const payload = {
      menuName: formData.name,
      price: formData.price,
      categoryId: formData.category,
      uom: formData.uom,
      quantity: formData.stock,
      description: formData.description,
    };

    // 1️⃣ Create menu
    const createdMenu = await submitMenu(payload);
    console.log(createdMenu);
    

    if (!createdMenu) {
      toast.error("Failed to create menu.");
      return;
    }

    const menuId = createdMenu.menuId;
    console.log("Created Menu ID:", menuId);

    // 2️⃣ Upload image
    if (img) {
      const imgForm = new FormData();
      imgForm.append("file", img);

      try {
        await uploadImg(imgForm, menuId);
        toast.success("Image uploaded successfully!");
      } catch (error) {
        toast.error("Menu created, but image upload failed.");
      }
    }
    
    setBtnLoad(false);
    dispatch(triggerRefresh());
 dispatch(closePopup());
 

    toast.success("Menu created!");
   
  };

  return (
    <div className="py-2">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        
        <CustomInput
          type="text"
          placeholder="Menu Name*"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <CustomInput
          type="number"
          placeholder="Price*"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />

        <CustomDropdown
          options={categories}
          value={formData.category}
          placeholder="Select Category*"
          onChange={(value) => setFormData({ ...formData, category: value })}
        />

        <CustomInput
          type="number"
          placeholder="Stock*"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
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

        {/* Image Upload Box */}
        <div
          className="flex w-full border border-slate-300 items-center justify-center p-2 
          hover:bg-slate-100 cursor-pointer rounded-md"
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

        <SubmitBtn loading={btnLoad}  name={"create"} className="py-2.5" />
      </form>
    </div>
  );
};

export default MenuForm;
