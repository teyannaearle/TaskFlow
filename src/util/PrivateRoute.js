import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRoute = ({ children, ...rest }) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return user ? (
    <>
      <Outlet /> <Navbar />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
