import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import NavbarComponent from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="text">
        <div className="mydiv">
          <h2
            style={{ textAlign: "center", fontSize: "40px", color: "purple" }}
          >
            <span>Discover the</span> Artistry <span>of Craftsmanship</span>
          </h2>
          <p
            style={{
              textAlign: "justify",
              color: "black",
              fontSize: "28px",
              marginTop: "20px",
            }}
          >
            Join us in appreciating the beauty of handmade art. Explore our
            gallery, participate in our workshops, and become a part of our
            creative community. Let the stories behind each craft inspire you
            and connect you to the rich tradition of handmade artistry.
          </p>
        </div>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
