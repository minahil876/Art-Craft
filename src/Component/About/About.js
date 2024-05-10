import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";
import ime from "../../Assets/undraw4.png";
import ime1 from "../../Assets/undraw1.png";
import ime2 from "../../Assets/undraw2.png";
import imag from "../../Assets/img10.jpg";
import imag1 from "../../Assets/basket19.jpg";
// import Carousel from "../Carousel/Carousel";
import Testimonial from '../Testimonial/Testimonial'

import Team from "../Team/Team";
function About() {
  return (
    <>
      <div className="main">

        <div className="left">
          <img src={imag} alt="" />
        </div>

        <div className="right">
          <h1 style={{ fontFamily: "Poetsen One", color: "purple" }}>
            {" "}
            <span>WELCOME </span>TO <span>CRAFT</span> GALLERY
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            vehicula velit. Fusce venenatis, enim sit amet sollicitudin pretium,
            metus odio luctus ipsum, nec varius leo purus id elit. Integer non
            nisi at purus accumsan eleifend.{" "}
            <span>Fusce ac fringilla metus.</span> Nullam sit amet lobortis
            nisl. Nulla facilisi. Vivamus semper dictum nisi, a lobortis lorem
            pretium a. Duis bibendum ex eget nunc eleifend, vitae ullamcorper
            libero convallis.
          </p>
        </div>
      </div>
      <div className="main1">
        <div className="left1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            vehicula velit. Fusce venenatis, enim sit amet sollicitudin pretium,
            metus odio luctus ipsum, nec varius leo purus id elit. Integer non
            nisi at purus accumsan eleifend.{" "}
            <span>Fusce ac fringilla metus.</span> Nullam sit amet lobortis
            nisl. Nulla facilisi. Vivamus semper dictum nisi, a lobortis lorem
            pretium a. Duis bibendum ex eget nunc eleifend, vitae ullamcorper
            libero convallis.
          </p>
        </div>
        <div className="right1">
          <img src={imag1} alt="" />
        </div>
      </div>

      <h1
        style={{
          fontFamily: "Poetsen One",
          color: "purple",
          marginTop: "30px",
        }}
      >
        <span>Our Services</span>
      </h1>
      <div className="row">
        <div className="box1 ">
          <img src={ime} alt="" />
          <h3 style={{ marginBottom: "30px" }}>Communication</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            aliquam nisi ut velit posuere, in aliquam justo congue. Donec
            finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
            finibus justo mi id elit
          </p>
        </div>
        <div className="box1">
          <img src={ime1} alt="" />
          <h3 style={{ marginBottom: "30px" }}>Inspired Design</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            aliquam nisi ut velit posuere, in aliquam justo congue. Donec
            finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
            finibus justo mi id elit
          </p>
        </div>
        <div className="box1">
          <img src={ime2} alt="" />
          <h3 style={{ marginBottom: "20px" }}>Happy Customer</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            aliquam nisi ut velit posuere, in aliquam justo congue. Donec
            finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
            finibus justo mi id elit
          </p>
        </div>
      </div>

      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}

export default About;
