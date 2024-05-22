import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import im1 from "../../Assets/craft.png";

const Testimonial = () => {
  return (
    <>
      <div className="container testimonial" style={{ marginTop: "50px" }}>
        <h1 className="text-center mt-5 mb-5" style={{ fontFamily: "Poetsen One", color: "purple", fontSize: '35px'}}>
        <span>Our Client Review</span>
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
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="imge">
              <img src={im1} className="" alt="" />
            </div>
            <div className="boxtestimonial">
              <p>
                <span>"</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas enim perferendis reiciendis voluptate
                sint repudiandae repellat sit, veritatis voluptatem ex?{" "}
                <span>"</span>{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
