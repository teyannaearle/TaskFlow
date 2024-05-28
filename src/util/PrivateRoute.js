import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;