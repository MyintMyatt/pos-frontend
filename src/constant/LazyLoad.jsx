import { lazy } from "react";
import PageLoader from "../component/core/PageLoader";


export const AdminLayout=PageLoader(lazy(()=>import("@/layout/AdminLayout")));
export const CashierLayout=PageLoader(lazy(()=>import("@/layout/CashierLayout")));

export const  Home = PageLoader(lazy(() => import("@/features/admin/user/pages/Home")));
export const User = PageLoader(lazy(() => import("@/features/admin/user/pages/User")));
export const Menu = PageLoader(lazy(() => import("@/features/admin/user/pages/Menu")));
export const Inventory = PageLoader(lazy(() => import("@/features/admin/user/pages/Inventory")));
export const SalesHistory =PageLoader( lazy(() => import("@/features/admin/user/pages/SaleHistory")))
export const NotFound= PageLoader( lazy(() => import("@/component/NotFound")));
export const Sales=PageLoader(lazy(()=>import("@/features/sales&payment/pages/Sales")))


