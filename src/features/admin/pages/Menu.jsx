// import { StatusPopup } from "@/component/StatusPopUp";
import AnimationData from "@/assets/Success.json";
import Lottie from "lottie-react";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import MenuList from "../component/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { setCategories, setSuccessPopUp } from "../../../reducer/menuSlice";
import { useGetCategory } from "../hooks/useGetCatgory";
import { useGetMenus } from "../../sales&payment/hooks/useGetMenus";


const Menu = () => {

    const size=50;

const{data}=useGetCategory();
const{data:menus,loading}=useGetMenus(0,"",size);


console.log(menus);


    const showStatusPopUp = useSelector((state) => state.menu.successPopUp);
    const dispatch = useDispatch();
    const handlePopup = (content) => {
        dispatch(openPopup(content));
    };

    dispatch(setCategories(data?.data))

    return (
        <div className="h-screen relative px-4 py-2">
            {showStatusPopUp && (
                <StatusPopup
                    statusMessage="Success"
                    onClose={() => dispatch(setSuccessPopUp(false))}
                >
                    <Lottie
                        animationData={AnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 200, height: 200 }} 
                    />
                </StatusPopup>
            )}
            <MenuList filteredProducts={menus?.data.content} loading={loading}  />
            <div className="absolute bottom-25 right-10">
                <FloatBtn onClick={() => handlePopup(popupInstance.MENU)} />
            </div>
        </div>
    );
};

export default Menu;
