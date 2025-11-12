import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../component/common/Sidebar";
import AppBar from "../component/common/AppBar";
import { cashier_navs } from "../constant/Navs";
import { Toaster } from "react-hot-toast";

const CashierLayout = () => {
  const location = useLocation();

  const currentRoute = cashier_navs.find((r) => r.path === location.pathname);


  

  

  return (
    
    <div className="flex min-h-screen">
      <Toaster position="top-center"/>
      <div className="z-40">
        <SideBar  navs={cashier_navs} role={"cashier"}/>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppBar title={currentRoute.title} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CashierLayout;
