import React from 'react';
import './Admin.css';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faMoneyCheckAlt, faBell, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('alogin');
    sessionStorage.removeItem('atoken');
    navigate('/signin'); // Adjust the path as needed
  };

  return (
    <div className="admin-container3">
      {/* <div className="admin-header3">Admin Page</div> */}
      <div className="row3">
        <div className="side col-lg-4 admin-sidebar3" style={{width: '25%'}}>
          <div><NavLink to="ahome"><FontAwesomeIcon icon={faHome} /> Home</NavLink></div>
          <div><NavLink to="adashboard"><FontAwesomeIcon icon={faPlus} /> Dashboard</NavLink></div>
          <div><NavLink to="addproduct"><FontAwesomeIcon icon={faPlus} /> Add Product</NavLink></div>
          <div><NavLink to="removeproduct"><FontAwesomeIcon icon={faTrash} /> Remove Product</NavLink></div>
          <div><NavLink to="updateproduct"><FontAwesomeIcon icon={faEdit} /> Update Product</NavLink></div>
          <div><NavLink to="orderpayment"><FontAwesomeIcon icon={faMoneyCheckAlt} /> Order Payment</NavLink></div>
          <div><NavLink to="users"><FontAwesomeIcon icon={faBell} /> Users</NavLink></div>
          <div><NavLink to="message"><FontAwesomeIcon icon={faBell} /> Messages</NavLink></div>
          <div><button className="logout-button" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></div>
        </div>
        <div className="col-lg-8 admin-content3" style={{ fontSize: '20px', color: 'white' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
