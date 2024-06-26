import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              vehicula velit. Fusce venenatis, enim sit amet sollicitudin
              pretium, metus odio luctus ipsum, nec varius leo purus id elit.
              Integer non nisi at purus accumsan eleifend.
              
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam nisi ut velit posuere, in aliquam justo congue. Donec
              finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
              finibus justo mi id elit
            </p>
            <button class="custom-button">See more</button>
          </div>
          <div class="col-md-4 box1">
            <img src={ime1} alt="" class="img-fluid" />
            <h3 style={{ marginBottom: "30px" }}>
              <span style={{ color: "#016A70" }}>Inspired Design</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam nisi ut velit posuere, in aliquam justo congue. Donec
              finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
              finibus justo mi id elit
            </p>
            <button class="custom-button">See more</button>
          </div>
          <div class="col-md-4 box1">
            <img src={ime2} alt="" class="img-fluid" />
            <h3 style={{ marginBottom: "20px" }}>
              <span style={{ color: "#016A70" }}>Custom Craft Orders</span>
            </h3>
            <p style={{ textAlign: "justify", marginTop: "30px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam nisi ut velit posuere, in aliquam justo congue. Donec
              finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
              finibus justo mi id elit
            </p>
            <button class="custom-button" style={{ marginTop: "5px" }}>
              See more
            </button>
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
