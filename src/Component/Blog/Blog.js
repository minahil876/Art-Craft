import React from "react";
import me from "../../Assets/img3.jpg";
import me1 from "../../Assets/basket29.jpg";
import me2 from "../../Assets/img4.jpg";
import me3 from "../../Assets/basket30.jpg";
import me4 from "../../Assets/img6.jpg";
import me5 from "../../Assets/img10.jpg";
import "./Blog.css";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import NavbarComponent from "../Navbar/Navbar";
const Blog = () => {
  return (
    <>
      <NavbarComponent />
      <div class="container">
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Eid Box</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me1} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Flower Bouquet</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me2} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Eid Box</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div> */} <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me3} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Red Rose Bouquet</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" style={{ marginTop: "30px" }}>
        
          <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me4} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Pink Rose Bouquet</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me2} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Eid Box</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="box">
              <img src={me5} alt="" />
              <div class="box-content">
                <ul class="icon">
                  <h2>Bouquet With Birthday Tag</h2>
                </ul>
                <div class="box-profile">
                  <NavLink to="/slick" style={{ color: "#016A70" }}>
                    Read More
                  </NavLink>
                  {/* <a href="/Slick"> read more</a>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
