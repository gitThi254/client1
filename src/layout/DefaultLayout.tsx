import Header from "../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useVerify } from "../hooks/auth.hook";
import BreadcumbTW from "../components/Breadcumbs/BreadcumbTW";

const DefaultLayout = () => {
  const user = useVerify();
  if (!user?.data && !user?.isPending) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <>
      <Header />
      <BreadcumbTW />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
