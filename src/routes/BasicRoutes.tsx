import { Navigate, Outlet } from "react-router-dom";
import { useVerify } from "../hooks/auth.hook";

const BasicRoute = () => {
  const user = useVerify();
  if (user && !user?.isPending) {
    return <Navigate to="/" replace />;
  }
  return <>{<Outlet />}</>;
};

export default BasicRoute;
