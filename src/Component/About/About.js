import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";
import { NavLink } from "react-router-dom";
import ime from "../../Assets/communicate.png";
import ime1 from "../../Assets/designs.png";
import ime2 from "../../Assets/custom.png";
import imag from "../../Assets/img22.jpg";
import imag1 from "../../Assets/img19.jpeg";
import Testimonial from "../Testimonial/Testimonial";

import Team from "../Team/Team";
import NavbarComponent from "../Navbar/Navbar";
function About() {
  return (
    <div>
      <div>
        <NavbarComponent />

        <div className="main">
          <div className="left">
            <img src={imag} alt="" />
          </div>
          <div className="right">
            <h1
              style={{
                fontSize: "35px",
                fontFamily: 'Noto Serif Display", serif',
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#016A70" }}>WELCOME </span>{" "}
              <span style={{ color: "#D2DE32" }}>TO </span>
              <span style={{ color: "#016A70" }}>CRAFT</span>{" "}
              <span style={{ color: "#D2DE32" }}>GALLERY</span>
            </h1>
            <p style={{ fontSize: "22px" }}>
              Hello and welcome! I’m thrilled to have you here at My Craft
              Gallery, a space dedicated to the celebration and appreciation of
              handmade art.My Craft Gallery is not just about showcasing art;
              it’s about celebrating the intricate dance between tradition and
              innovation.
            </p>
          </div>
        </div>
        <div className="main1">
          <div className="left1">
            <h1 style={{ fontSize: "35px", marginBottom: "20px" }}>
              <span style={{ color: "#016A70" }}>ART</span>{" "}
              <span style={{ color: "#D2DE32" }}> OF </span>{" "}
              <span style={{ color: "#016A70" }}> CREATION</span>
            </h1>
            <p style={{ fontSize: "22px" }}>
            Unveil the magic of handmade gifts that embody elegance and creativity. Each piece is thoughtfully crafted to capture the essence of love and appreciation, making your presents truly unforgettable. Our artisans pour their heart and soul into every creation, ensuring that your gifts are as unique and special as your loved ones.

              
            </p>
          </div>
          <div className="right1">
            <img src={imag1} alt="" />
          </div>
        </div>

        <h1
          style={{
            // color: "#016A70",
            // fontFamily: 'Noto Serif Display", serif',
            marginTop: "30px",
            fontSize: "35px",
          }}
        >
          <span style={{ color: "#016A70" }}>OUR</span>{" "}
          <span style={{ color: "#D2DE32" }}> SERVICES</span>
        </h1>
        <div class="row4">
          <div class="col-md-4 box1">
            <img src={ime} alt="" class="img-fluid" />
            <h3 style={{ marginBottom: "30px" }}>
              <span style={{ color: "#016A70" }}>Communication</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
            Effective communication is the cornerstone of any successful relationship, whether personal or professional. It fosters understanding, builds trust, and resolves conflicts, paving the way for collaboration and growth.

            </p>
            <button class="custom-button"><NavLink to="/contact" style={{border: 'none',textDecoration: 'none', color: 'white'}}>See more</NavLink></button>
          </div>
          <div class="col-md-4 box1">
            <img src={ime1} alt="" class="img-fluid" />
            <h3 style={{ marginBottom: "30px" }}>
              <span style={{ color: "#016A70" }}>Inspired Design</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
            Our designs are inspired by the beauty and elegance of nature, blending creativity with functionality. Each piece is crafted with meticulous attention to detail, ensuring a perfect harmony of aesthetics and purpose.

            </p>
            <button class="custom-button"><NavLink to="/gallery" style={{border: 'none',textDecoration: 'none', color: 'white'}}>See more</NavLink></button>
          </div>
          <div class="col-md-4 box1">
            <img src={ime2} alt="" class="img-fluid" />
            <h3 style={{ marginBottom: "20px" }}>
              <span style={{ color: "#016A70" }}>Custom Craft Orders</span>
            </h3>
            <p style={{ textAlign: "justify", marginTop: "30px" }}>
            Our custom craft orders allow you to personalize every detail to your liking. Whether you have a specific design in mind or need guidance to bring your vision to life, we are here to help. From unique gifts to special event decor.
            </p>
            <button class="custom-button"><NavLink to="/product" style={{border: 'none',textDecoration: 'none', color: 'white'}} className='mt-5'>See more</NavLink></button>
          </div>
        </div>

        {/* <Carousel /> */}
        <Team />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default About;
