import { Navigate } from 'react-router-dom';

const Userroutes = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!sessionStorage.getItem('token');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default Userroutes;