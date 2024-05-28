import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../../Assets/img10.jpg';
import im2 from '../../Assets/img4.jpg';
import im3 from '../../Assets/basket29.jpg';
import im4 from '../../Assets/basket30.jpg';
import './Carousel.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 style={{marginTop: '80px', color: 'purple', fontSize: '34px'}}><span>Discover</span> Elegance <span>And</span> Craftsmanship</h1>
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
            <img src={im1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im2} className="d-block w-100" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im3} className="d-block w-100" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={im4} className="d-block w-100" alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
