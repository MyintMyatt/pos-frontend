import { lazy } from "react";
import PageLoader from "../component/core/PageLoader";


export const AdminLayout=PageLoader(lazy(()=>import("@/layout/AdminLayout")));
export const CashierLayout=PageLoader(lazy(()=>import("@/layout/CashierLayout")));
export const AuthLayout=PageLoader(lazy(()=>import("@/layout/AuthLayout")));

export const  Home = PageLoader(lazy(() => import("@/features/admin/pages/Home")));
export const User = PageLoader(lazy(() => import("@/features/admin/pages/User")));
export const Menu = PageLoader(lazy(() => import("@/features/admin/pages/Menu")));
export const Inventory = PageLoader(lazy(() => import("@/features/admin/pages/Inventory")));
export const SalesHistory =PageLoader( lazy(() => import("@/features/admin/pages/SaleHistory")))
export const NotFound= PageLoader( lazy(() => import("@/component/common/NotFound")));
export const Sales=PageLoader(lazy(()=>import("@/features/sales&payment/pages/Sales")));
export const  Login = PageLoader(lazy(() => import("@/features/auth/pages/LoginPage")));


