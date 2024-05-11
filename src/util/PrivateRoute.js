import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const loggedIn = JSON.parse(window.localStorage.getItem("user"))
    return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;