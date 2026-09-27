import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const isLoggedIn = sessionStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;