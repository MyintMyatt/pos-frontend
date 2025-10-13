import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../features/admin/layout/AdminLayout";
import { Home,Inventory,Menu,NotFound, Sales, User } from "../constant/LazyLoad";
const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    path: "/",
    errorElement:<NotFound/>,
    children: [{ element: <Home/>, index: true},
        {element:<User/>,path:"/users"},
        {element:<Menu/>,path:"/menus"},
        {element:<Inventory/>,path:"/inventory"},
        {element:<Sales/>,path:"/sales"}
    ],
  },
]);

export default router;
