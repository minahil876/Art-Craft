import React from "react";
import NavbarComponent from "../Navbar/Navbar";
import "./Product.css";
import me from "../../Assets/img13.jpeg";
import Searchform from "../Searchform/Searchform";
import Procard from "../Procard/Procard";
function Product() {
  return (
    <>
      <NavbarComponent />
      <div className="special">
        <div className="main">
          <div className="left">
            <h1>
              <span style={{ color: "#016A70" }}>DISCOVER </span>{" "}
              <span style={{ color: "#D2DE32" }}>THE</span>{" "}
              <span style={{ color: "#016A70" }}>BEST</span>{" "}
              <span style={{ color: "#D2DE32" }}>GIFTS</span>{" "}
              <span style={{ color: "#016A70" }}>FOR</span>{" "}
              <span style={{ color: "#D2DE32" }}>YOUR</span>{" "}
              <span style={{ color: "#016A70" }}>LOVED</span>{" "}
              <span style={{ color: "#D2DE32" }}>ONES</span>
            </h1>
            <p style={{ marginLeft: "28px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="right">
            <img src={me} alt="world" />
          </div>
        </div>
        <Searchform />
        <Procard />
      </div>
    </>
  );
}
export default Product;
