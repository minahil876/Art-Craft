import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleLoginClick = () => {
    navigate('/Signin');
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <h3>logo</h3>
      </span>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => handleItemClick(0)}
              className={activeItem === 0 ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleItemClick(1)}
              className={activeItem === 1 ? "active" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              onClick={() => handleItemClick(2)}
              className={activeItem === 2 ? "active" : ""}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              onClick={() => handleItemClick(3)}
              className={activeItem === 3 ? "active" : ""}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              onClick={() => handleItemClick(4)}
              className={activeItem === 4 ? "active" : ""}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleItemClick(5)}
              className={activeItem === 5 ? "active" : ""}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="button">
        <button NavLink 
        to="/Signin" onClick={handleLoginClick}>Login/Register</button>
      </div> */}
      <div className="button">
        <button onClick={handleLoginClick}>login</button>
      </div>
    </div>
  );
}

export default Navbar;

