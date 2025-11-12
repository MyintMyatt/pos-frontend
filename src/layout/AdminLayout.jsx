import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../component/common/Sidebar";
import AppBar from "../component/common/AppBar";
import { admin_navs } from "../constant/Navs";
import PopupBackground from "../component/common/PopupBackground";
import Popup from "../component/common/Popup";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../reducer/popupSlice";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
    const location = useLocation();
    const isOpen = useSelector((state) => state.popup.isOpen);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(closePopup());
    };

    const currentRoute = admin_navs.find((r) => r.path === location.pathname);
    // console.log(currentRoute.title);

    return (
        <div className="relative overflow-auto flex min-h-screen">
            {isOpen && (
                <PopupBackground
                    isOpen={isOpen}
                    className={`absolute z-[999] inset-0 `}
                >
                    <Popup close={() => closeModal()} />
                </PopupBackground>
            )}
            <div className="z-10 ">
                <SideBar navs={admin_navs} role={"admin"} />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                 <Toaster position="top-center"/>
                <AppBar title={currentRoute.title} />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
