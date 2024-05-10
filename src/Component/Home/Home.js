import React from "react";
import Footer from "../Footer/Footer";
// import Testimonial from '../Testimonial/Testimonial'
import "./Home.css";
import img from "../../Assets/basket18.jpg";
import img1 from "../../Assets/img7.jpg";
import img2 from "../../Assets/img10.jpg";
import img3 from "../../Assets/img6.jpg";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <div>
      <div className="image">
        <img src={img} alt="" />
        <div className="image-text">
          "Step into the enchanting world of AR Craft Gallery, where elegance
          meets craftsmanship. Explore our diverse array of floral bouquets,
          exquisite Nikkah pens, and charming gift baskets, each meticulously
          crafted to elevate every occasion. Discover the perfect blend of
          artistry and creativity in every creation, exclusively at AR Craft
          Gallery."
        </div>
        
      <div className="images">

      <div className="im">
       <img src={img1} alt="" />
       <p>"In a canvas of red blooms and cocoa treasures, the letter M embodies affection, a sweet embrace that lasts forever."</p>
      </div>

       <div className="ime">
       <img src={img2} alt="" />
       <p>In a garden of crimson, a red rose bouquet stands bold, each petal a testament to love untold.Crimson blooms weave tales of passion, in a red flower bouquet, love's everlasting fashion.</p>
       </div>

        <div className="imeg">
        <img src={img3} alt="" />
        <p>Blushing pink roses entwine in a delicate embrace, a bouquet of affection, love's gentle grace.Amidst a sea of green, a pink rose bouquet dances, its tender hues whispering sweet romances.</p>
        </div>
      </div>
      </div>
      <Carousel />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default Home;
