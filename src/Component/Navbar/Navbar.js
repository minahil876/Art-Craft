import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="navi">
  <Navbar expanded={expanded} expand="lg" style={{background: 'black'}}>
    <Container>
      <Navbar.Brand href="#home" style={{fontSize:'2rem'}}><span style={{color: 'white'}}>logo</span></Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" style={{fontSize:'1.3rem'}}> {/* Changed from "me-auto" to "ms-auto" to align to right */}
        {/* <Nav.Link as={NavLink} to="/admin" activeClassName="active" className="nav-link">Admin</Nav.Link> */}
          <Nav.Link as={NavLink} to="/" activeClassName="active" className="nav-link me-4">Home</Nav.Link> 
          <Nav.Link as={NavLink} to="/about" activeClassName="active" className="nav-link me-4">About Us</Nav.Link> 
          <Nav.Link as={NavLink} to="/product" activeClassName="active" className="nav-link me-4">Product</Nav.Link> 
          <Nav.Link as={NavLink} to="/gallery" activeClassName="active" className="nav-link me-4">Gallery</Nav.Link> 
          <Nav.Link as={NavLink} to="/blog" activeClassName="active" className="nav-link me-4">Blogs</Nav.Link> 
          <Nav.Link as={NavLink} to="/contact" activeClassName="active" className="nav-link me-4">Contact Us</Nav.Link>     
          <Nav.Link as={NavLink} to="/signin" activeClassName="active" className="nav-link">Sign In</Nav.Link> 
          <Nav.Link as={NavLink} to="/signup" activeClassName="active" className="nav-link">Sign Up</Nav.Link> 
           
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  
  );
}

export default NavbarComponent;


