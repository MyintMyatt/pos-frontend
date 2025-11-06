import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import {
  Home,
  Inventory,
  Menu,
  NotFound,
  Sales,
  SalesHistory,
  User,
} from "../constant/LazyLoad";
import CashierLayout from "../layout/CashierLayout";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([
  {
    element: <CashierLayout />,
    path: "/cashier",
    errorElement: <NotFound />,
    children: [
      { element: <Sales />, index: true },
      { element: <SalesHistory />, path: "sales-history" },
    ],
  },
  {
    element: <AdminLayout />,
    path: "/admin",
    errorElement: <NotFound />,
    children: [
      { element: <Home />, index: true },
      { element: <User />, path: "users" },
      { element: <Menu />, path: "menus" },
      { element: <Inventory />, path: "inventory" },
      { element: <SalesHistory />, path: "sales-history" },
    ],
  },

...authRouter
]);

export default router;
