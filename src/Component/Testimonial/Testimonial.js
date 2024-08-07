import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import im1 from "../../Assets/testi.jpg";
import im2 from "../../Assets/testi1.jpg";
import im3 from "../../Assets/testi2.jpg";
import im4 from "../../Assets/testi3.webp";

const Testimonial = () => {
  return (
    <>
      <div className="container testimonial" style={{ marginTop: "50px" }}>
        <h1 className="text-center mt-5 mb-5" style={{ fontSize: '35px' }}>
          <span style={{ color: '#016A70' }}>Our</span> <span style={{ color: '#D2DE32' }}>Client </span> <span style={{ color: '#016A70' }}>Reviews</span>
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            containerClass: "custom-pagination-container",
            wrapperClass: "custom-pagination-wrapper",
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> The craftsmanship and attention to detail exceeded my expectations. I am thrilled with my custom order from Crafty Creations. Highly recommended! <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im2} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Crafty Creations delivered a perfect gift for my sister's birthday. The quality and design were exceptional. Thank you! <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im3} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> I ordered a custom basket for a corporate event, and it was a hit! Crafty Creations' professionalism and creativity shine through their work. <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im4} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Crafty Creations' attention to detail and personalized service made my wedding decorations perfect. Highly recommend their services! <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> I've been a repeat customer of Crafty Creations because of their consistent quality and excellent customer service. Always a pleasure to work with them! <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Crafty Creations helped me find the perfect gift for my husband's anniversary. Their unique designs make them stand out. Thank you! <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
