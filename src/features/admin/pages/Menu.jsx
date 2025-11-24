// import { StatusPopup } from "@/component/StatusPopUp";
import AnimationData from "@/assets/Success.json";
import Lottie from "lottie-react";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import MenuList from "../component/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { setSuccessPopUp } from "../../../reducer/menuSlice";

const Menu = () => {
    const showStatusPopUp = useSelector((state) => state.menu.successPopUp);
    const dispatch = useDispatch();
    const handlePopup = (content) => {
        dispatch(openPopup(content));
    };

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
            <MenuList />
            <div className="absolute bottom-25 right-10">
                <FloatBtn onClick={() => handlePopup(popupInstance.MENU)} />
            </div>
        </div>
    );
};

export default Menu;
