import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Header from "../components/Header/Header";

const PrivateRoute = ({ children, ...rest }) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return user ? (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Navbar />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
