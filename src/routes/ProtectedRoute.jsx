import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // if (!token) return <Navigate to="/login" replace />;

  // if (!allowedRoles.includes(role)) {
  //   if (role === "ADMIN") return <Navigate to="/admin" replace />;
  //   if (role === "CASHIER") return <Navigate to="/cashier" replace />;
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
