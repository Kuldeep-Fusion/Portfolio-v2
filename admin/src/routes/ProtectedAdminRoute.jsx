import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const isLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true" ||
    sessionStorage.getItem("adminLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;