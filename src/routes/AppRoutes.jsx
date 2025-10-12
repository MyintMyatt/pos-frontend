import { lazy, Suspense } from "react";
import AdminLayout from "@/features/admin/layout/adminLayout";
import { Route, Routes } from "react-router-dom";
import Loading from "@/component/Loading";

const Home = lazy(() => import("@/features/admin/user/pages/Home"));
const User = lazy(() => import("@/features/admin/user/pages/User"));
const Menu = lazy(() => import("@/features/admin/user/pages/Menu"));
const Inventory = lazy(() => import("@/features/admin/user/pages/Inventory"));
const Sales = lazy(() => import("@/features/admin/user/pages/SaleHistory"));
const NotFound = lazy(() => import("@/component/NotFound"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div className=""><Loading /></div>}>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/menus" element={<Menu />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
