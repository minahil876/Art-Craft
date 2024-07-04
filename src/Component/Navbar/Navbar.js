import React, { useState, useEffect } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa"; 

const NavbarComponent = () => {
  const navigate=useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const ulogin = JSON.parse(sessionStorage.getItem("ulogin"));

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkit=()=>{
 navigate('/uhome')
  }
 
  const handleLogout = () => {
    sessionStorage.removeItem('ulogin')
    sessionStorage.removeItem('token')
    navigate('/signin'); 
  };

  return (
    <div
      className={`navi ${
        scrollDirection === "down" ? "no-margin" : "with-margin"
      }`}
    >
      <Navbar expanded={expanded} expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "2rem" }}>
            <span style={{ color: "white" }}>𝑪𝒓𝒂𝒇𝒕 𝑮𝒂𝒍𝒍𝒆𝒓𝒚</span>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="item ms-auto" style={{ fontSize: "1.3rem" }}>
              <Nav.Link
                as={NavLink}
                to="/"
                activeClassName="active"
                className="nav-link me-4"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                activeClassName="active"
                className="nav-link me-4"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/product"
                activeClassName="active"
                className="nav-link me-4"
              >
                Product
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/gallery"
                activeClassName="active"
                className="nav-link me-4"
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/blog"
                activeClassName="active"
                className="nav-link me-4"
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                activeClassName="active"
                className="nav-link me-4"
              >
                Contact Us
              </Nav.Link>
              
              {ulogin ? (
                
                <NavDropdown
              title={
                <span>
                  <img src={ulogin.profile_photo_url} width="46px" height="46px" alt="Profile" className=" user" style={{borderRadius:"50%"}}  />  {ulogin.username}
                </span>
              }
              id="basic-nav-dropdown" className="nav-link" >
              <NavDropdown.Item className="custom-dropdown-item" onClick={() => checkit()}>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="custom-dropdown-item" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
              ) : (
                <>
                  <Nav.Link
                    as={NavLink}
                    to="/signin"
                    activeClassName="active"
                    className="nav-link me-4"
                  >
                    Sign In
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/signup"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
