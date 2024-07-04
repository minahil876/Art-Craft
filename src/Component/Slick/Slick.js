import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarComponent from "../Navbar/Navbar";
import "./Slick.css";
import Footer from "../Footer/Footer";
import basket1 from "../../Assets/basket29.jpg";
import basket2 from "../../Assets/img4.jpg";
import basket3 from "../../Assets/img6.jpg";
import basket4 from "../../Assets/img3.jpg";
import basket5 from "../../Assets/basket30.jpg";
import basket6 from "../../Assets/img10.jpg";

const posts = [
  {
    image: basket1,
    category: "Flower Bouquet",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Delight your loved ones with our stunning Flower Bouquet. Handcrafted to
      perfection, it features a mesmerizing blend of vibrant roses, fragrant lilies,
      and elegant foliage. Ideal for birthdays, anniversaries, or any special occasion,
      this bouquet is a beautiful expression of love and admiration. Let its beauty
      brighten someone's day and create lasting memories.`,
  },
  {
    image: basket2,
    category: "Eid Box",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Celebrate Eid in style with our exclusive Eid Box. Packed with an assortment
      of delectable treats and thoughtful gifts, this box is designed to spread joy
      and happiness. Whether it's for family or friends, this Eid Box is the perfect
      way to share the spirit of the season and create cherished moments together.`,
  },
  {
    image: basket3,
    category: "Pink Rose Bouquet",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Our Pink Rose Bouquet is a symbol of grace and elegance. Each rose is carefully
      selected and arranged to convey heartfelt emotions and convey messages of love
      and appreciation. Whether it's for a romantic gesture or to brighten someone's
      day, this bouquet is sure to make a lasting impression with its beauty and charm.`,
  },
  {
    image: basket4,
    category: "Eid Box",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Our Eid Box offers a delightful blend of traditional flavors and modern delights.
      Perfect for sharing with loved ones during Eid celebrations, it includes a variety
      of sweets, savory snacks, and decorative items to enhance the festive atmosphere.
      Spread joy and create unforgettable memories with this thoughtful and festive gift.`,
  },
  {
    image: basket5,
    category: "Red Rose Bouquet",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Red roses symbolize love and passion, making our Red Rose Bouquet the perfect
      choice for expressing deep emotions. Each rose is meticulously arranged to
      showcase its natural beauty and timeless elegance. Whether it's for a romantic
      gesture or a heartfelt expression of affection, this bouquet makes a memorable
      statement that will be cherished by the recipient.`,
  },
  {
    image: basket6,
    category: "Birthday Bouquet",
    author: "Madhusudan",
    date: "22 December 2021",
    description: `
      Celebrate birthdays with our vibrant Birthday Bouquet. Bursting with colorful
      blooms and seasonal flowers, this arrangement is designed to bring joy and
      happiness to the celebration. Whether it's for a friend, family member, or
      colleague, this bouquet is a wonderful way to mark the occasion and make it
      truly special.`,
  },
];

const Slick = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <>
      <NavbarComponent />
      <div className="post-slider-container">
        <Slider {...settings}>
          {posts.map((post, index) => (
            <div
              key={index}
              className="htmega-data-title htmega-single-post-slide"
            >
              <div className="htmega-post-slider-st-6">
                <div className="htmega-post-slider-left">
                  <div className="thumb">
                    <a href={post.link}>
                      <img
                        loading="lazy"
                        decoding="async"
                        width="1024"
                        height="739"
                        src={post.image}
                        alt="Post slider widget"
                      />
                    </a>
                  </div>
                </div>
                <div className="htmega-post-slider-right">
                  <div className="content">
                    <div className="post-inner">
                      <ul className="post-category">
                        <li>
                          <div
                            className="category creative"
                            style={{
                              color: "#016A70",
                              textDecoration: "none",
                              fontSize: "40px",
                              textAlign: "center",
                              fontFamily: '"Noto Serif Display", serif',
                            }}
                          >
                            {post.category}
                          </div>
                        </li>
                      </ul>
                      <p className="w-200" style={{ fontSize: "20px" }}>
                        {post.description}
                      </p>
                      <ul className="meta">
                        <li>
                          <div style={{ color: "#016A70" }}>
                            {post.author}
                          </div>
                        </li>
                        <li style={{ color: "#016A70", marginLeft: "-10px" }}>
                          {post.date}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Slick;
