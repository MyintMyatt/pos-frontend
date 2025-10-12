import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../../../component/Sidebar";
import AppBar from "../../../component/AppBar";
import { routesConfig } from "../../../config/routeConfig";

const AdminLayout = () => {
  const location = useLocation();

  const currentRoute = routesConfig.find((r) => r.path === location.pathname);

  return (
    <div className="flex min-h-screen">
      <SideBar />
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
