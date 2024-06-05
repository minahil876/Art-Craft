import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../../Assets/basket32.jpg';
import im2 from '../../Assets/basket30.jpg';
import im3 from '../../Assets/basket31.jpg';
import im4 from '../../Assets/basket29.jpg';
import './Carousel.css';

const Home = () => {
  return (
    <div className="home-container ">
      <div className="text-section">
        <h1 style={{marginTop: '80px',fontSize: '34px'}}><span style={{color: '#016A70'}}>Discover</span> <span style={{color: '#D2DE32'}}>Elegance</span> <span style={{color: '#016A70'}}>And</span> <span style={{color: '#D2DE32'}}>Craftsmanship</span></h1>
        <p>
          "Step into the enchanting world of AR Craft Gallery, where elegance
          meets craftsmanship. Explore our diverse array of floral bouquets,
          exquisite Nikkah pens, and charming gift baskets, each meticulously
          crafted to elevate every occasion. Discover the perfect blend of
          artistry and creativity in every creation, exclusively at AR Craft
          Gallery."
        </p>
      </div>
      <div className="carousel-section">
        <Carousel
          indicators={false}
          interval={2500}
          pause={false}
          nextIcon={<span className="carousel-control-next-icon"/>}
          prevIcon={<span className="carousel-control-prev-icon"/>}
        >
          <Carousel.Item>
            <img src={im1} className="d-block " alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im2} className="d-block " alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im3} className="d-block" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im4} className="d-block" alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
