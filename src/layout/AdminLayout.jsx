import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../component/common/Sidebar";
import AppBar from "../component/common/AppBar";
import { admin_navs } from "../constant/Navs";

const AdminLayout = () => {
  const location = useLocation();

  

  const currentRoute = admin_navs.find((r) => r.path === location.pathname);
  console.log(currentRoute.title);
  

  return (
    <div className="flex min-h-screen">
      <SideBar navs={admin_navs} role={"super admin"}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppBar title={currentRoute.title} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
