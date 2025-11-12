import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../layout/AdminLayout";
import CashierLayout from "../layout/CashierLayout";
import {
  Home,
  Inventory,
  Menu,
  NotFound,
  Sales,
  SalesHistory,
  User,
} from "../constant/LazyLoad";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([
  // CASHIER ROUTES
  {
    element: <ProtectedRoute allowedRoles={["CASHIER"]} />,
    children: [
      {
        element: <CashierLayout />,
        path: "/cashier",
        errorElement: <NotFound />,
        children: [
          { element: <Sales />, index: true },
          { element: <SalesHistory />, path: "sales-history" },
        ],
      },
    ],
  },

  // ADMIN ROUTES
  {
    element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
    children: [
      {
        element: <AdminLayout />,
        path: "/admin",
        errorElement: <NotFound />,
        children: [
          { element: <User />, index: true },
          { element: <Menu />, path: "menus" },
          { element: <Inventory />, path: "inventory" },
          { element: <SalesHistory />, path: "sales-history" },
        ],
      },
    ],
  },

  ...authRouter,
]);

export default router;
