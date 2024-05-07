import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../../Assets/basket13.jpg';
import im2 from '../../Assets/basket14.jpg';
import im3 from '../../Assets/basket16.jpg';
import './Carousel.css';

const Testi = () => {
  return (
    <>
      <div className="container-testimonial">
        <Carousel
          indicators={false}
          interval={2500}
          pause={false}
          nextIcon={<span className="carousel-control-next-icon" />}
          prevIcon={<span className="carousel-control-prev-icon" />}
          className="myCarousel"
        >
          <Carousel.Item>
            <div className="pic">
              <img src={im1} className='carousel-image' alt="" />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="pic">
              <img src={im2} className='carousel-image' alt="" />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="pic">
              <img src={im3} className='carousel-image' alt="" />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
}

export default Testi;
