import { lazy, Suspense } from "react";
import PageLoader from "../component/core/PageLoader";


export const  Home = PageLoader(lazy(() => import("@/features/admin/user/pages/Home")));
export const User = PageLoader(lazy(() => import("@/features/admin/user/pages/User")));
export const Menu = PageLoader(lazy(() => import("@/features/admin/user/pages/Menu")));
export const Inventory = PageLoader(lazy(() => import("@/features/admin/user/pages/Inventory")))
export const Sales =PageLoader( lazy(() => import("@/features/admin/user/pages/SaleHistory")))
export const NotFound= PageLoader( lazy(() => import("@/component/NotFound")))


