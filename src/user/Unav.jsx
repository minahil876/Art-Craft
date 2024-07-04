import React from 'react';
import '../Component/Admin/Admin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faMoneyCheckAlt, faUser, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Unav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('ulogin')
    sessionStorage.removeItem('token')
    navigate('/signin'); 
  };

  return (
    <div className="">
      <div className="">
        <div className="side col-lg-4 admin-sidebar3 " style={{width: '80%', marginTop: '100px'}}>
          <div>
          <NavLink to="/uhome">
              <FontAwesomeIcon icon={faHome } /> Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/uprofile">
              <FontAwesomeIcon icon={faUser} /> Profile
            </NavLink>
          </div>
          <div>
        
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
            <NavLink to="/favourite">
              <FontAwesomeIcon icon={faMoneyCheckAlt} /> Favourites
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
