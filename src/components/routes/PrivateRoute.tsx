import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../features/auth/context/AuthContext";

const PrivateRoute = () => {
  const { isLogin } = useAuthContext();

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;