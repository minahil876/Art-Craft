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
import NavbarComponent from "../Navbar/Navbar";
function About() {
  return (
    <div>
    <div>
    <NavbarComponent/>
   
      <div className="main">
      
        <div className="left">
          <img src={imag} alt="" />
        </div>
        <div className="right">
          <h1 style={{color: "purple", fontSize: '35px', marginBottom: '20px' }}>
            <span>WELCOME </span>TO <span>CRAFT</span> GALLERY
          </h1>
          <p style={{fontSize: '22px'}}>
          Hello and welcome! I’m thrilled to have you here at My Craft Gallery, a space dedicated to the celebration and appreciation of handmade art.My Craft Gallery is not just about showcasing art; it’s about celebrating the intricate dance between tradition and innovation. Each item is carefully selected not just for its beauty, but for the story it carries and the hands that shaped it. From the rustic charm of hand-thrown pottery to the delicate intricacies of handcrafted jewelry, our collection is as diverse as it is inspiring.
          </p>
        </div>
      </div>
      <div className="main1">
        <div className="left1"> 
        <h1 style={{color: "purple", fontSize: '35px', marginBottom: '20px' }}>
           <span>ART</span>  OF <span> CREATION</span>
          </h1>
          <p style={{fontSize: '22px'}}>
         
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
          color: "purple",
          marginTop: "30px",
        }}
      >
        <span style={{fontSize: '35px'}}>Our Services</span>
      </h1>
      <div class="row4">
      <div class="col-md-4 box1">
        <img src={ime} alt="" class="img-fluid" />
        <h3 style={{ marginBottom: "30px" }}>Communication</h3>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          aliquam nisi ut velit posuere, in aliquam justo congue. Donec
          finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
          finibus justo mi id elit
        </p>
        <button class="custom-button btn" style={{background
        : 'purple',color: 'white'}}>See more</button>
      </div>
      <div class="col-md-4 box1">
        <img src={ime1} alt="" class="img-fluid" />
        <h3 style={{ marginBottom: "30px" }}>Inspired Design</h3>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          aliquam nisi ut velit posuere, in aliquam justo congue. Donec
          finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
          finibus justo mi id elit
        </p>
        <button class="custom-button btn" style={{background
        : 'purple',color: 'white'}}>See more</button>
      </div>
      <div class="col-md-4 box1">
        <img src={ime2} alt="" class="img-fluid" />
        <h3 style={{ marginBottom: "20px" }}>Happy Customer</h3>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          aliquam nisi ut velit posuere, in aliquam justo congue. Donec
          finibus, sem ut vehicula pretium, elit nisi accumsan risus, vitae
          finibus justo mi id elit
        </p>
        <button class="custom-button btn" style={{background
        : 'purple',color: 'white'}}>See more</button>
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

