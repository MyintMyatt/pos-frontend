import { StatusPopup } from "@/component/StatusPopUp";
import AnimationData from "@/assets/Success.json";
import Lottie from "lottie-react";
import { useState } from "react";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../reducer/popupSlice";
import MenuList from "../component/MenuList";

const Menu = () => {
    const [showStatusPopUp, setShowStatusPopUp] = useState(false);
    const dispatch = useDispatch();
    const handlePopup = (content) => {
        dispatch(openPopup(content));
    };

    return (
        <div className="h-screen relative px-4 py-2">
            {showStatusPopUp && (
                <StatusPopup
                    statusMessage="Success"
                    onClose={() => setShowStatusPopUp(false)}
                >
                    <Lottie
                        animationData={AnimationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 200, height: 200 }} // Optional: set styles
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
