import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const PrivateRoute = ({ children, ...rest }) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return user ? (
    <>
      <Banner /> <Outlet /> <Navbar />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
