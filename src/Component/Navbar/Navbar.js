// import React, { useState } from "react";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// function Navbar() {
//   const navigate = useNavigate();
//   const [activeItem, setActiveItem] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveItem(index);
//   };

//   const handleLoginClick = () => {
//     navigate('/Signin');
//   };

//   return (
//     <div className="Navbar">
//       <span className="nav-logo">
//         <h3>logo</h3>
//       </span>
//       <div className="nav-items">
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               onClick={() => handleItemClick(0)}
//               className={activeItem === 0 ? "active" : ""}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               onClick={() => handleItemClick(1)}
//               className={activeItem === 1 ? "active" : ""}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/product"
//               onClick={() => handleItemClick(2)}
//               className={activeItem === 2 ? "active" : ""}
//             >
//               Product
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/gallery"
//               onClick={() => handleItemClick(3)}
//               className={activeItem === 3 ? "active" : ""}
//             >
//               Gallery
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/shop"
//               onClick={() => handleItemClick(4)}
//               className={activeItem === 4 ? "active" : ""}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               onClick={() => handleItemClick(5)}
//               className={activeItem === 5 ? "active" : ""}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
      
//       <div className="button">
//         <button onClick={handleLoginClick}>login</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="navi">
  <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" style={{fontSize:'2rem'}}><span style={{color: 'purple'}}>logo</span></Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" style={{fontSize:'1.3rem'}}> {/* Changed from "me-auto" to "ms-auto" to align to right */}
          <Nav.Link as={NavLink} to="/" activeClassName="active" className="nav-link me-4">Home</Nav.Link> 
          <Nav.Link as={NavLink} to="/about" activeClassName="active" className="nav-link me-4">About Us</Nav.Link> 
          <Nav.Link as={NavLink} to="/product" activeClassName="active" className="nav-link me-4">Product</Nav.Link> 
          <Nav.Link as={NavLink} to="/gallery" activeClassName="active" className="nav-link me-4">Gallery</Nav.Link> 
          <Nav.Link as={NavLink} to="/blogs" activeClassName="active" className="nav-link me-4">Blogs</Nav.Link> 
          <Nav.Link as={NavLink} to="/contact" activeClassName="active" className="nav-link me-4">Contact Us</Nav.Link>          
          <Nav.Link as={NavLink} to="/signin" activeClassName="active" className="nav-link">Sign In</Nav.Link> 
          {/* <Nav.Link as={NavLink} to="/register" activeClassName="active" className="nav-link">Sign Up</Nav.Link>  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  
  );
}

export default NavbarComponent;