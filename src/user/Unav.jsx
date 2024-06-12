import React from 'react';
import '../Component/Admin/Admin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMoneyCheckAlt, faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Unav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className="">
      <div className="">
        <div className="side col-lg-4 admin-sidebar3 w-50">
          <div>
            <NavLink to="removeproduct">
              <FontAwesomeIcon icon={faUser} /> Profile
            </NavLink>
          </div>
          <div>
            <NavLink to="/uproduct">
              <FontAwesomeIcon icon={faPlus} /> Products
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </NavLink>
          </div>
          <div>
            <NavLink to="/uorder">
              <FontAwesomeIcon icon={faMoneyCheckAlt} /> Order
            </NavLink>
          </div>
          <div>
            <button className="logout-button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unav;
