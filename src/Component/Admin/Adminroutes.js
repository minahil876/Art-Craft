import React from 'react';
import { Navigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';


const Adminroutes = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!sessionStorage.getItem('token');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/Signin" />;
};

export default Adminroutes;