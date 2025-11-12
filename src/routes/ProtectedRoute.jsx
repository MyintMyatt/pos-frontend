import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → go to login
  if (!token) return <Navigate to="/login" replace />;

  // Logged in but wrong role → redirect to correct dashboard
  if (!allowedRoles.includes(role)) {
    if (role === "ADMIN") return <Navigate to="/admin" replace />;
    if (role === "CASHIER") return <Navigate to="/cashier" replace />;
    return <Navigate to="/login" replace />;
  }

  // Authorized → allow route
  return <Outlet />;
};

export default ProtectedRoute;
