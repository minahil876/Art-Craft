import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css";

import basket1 from "../../Assets/basket29.jpg";
import basket2 from "../../Assets/img4.jpg";
import basket3 from "../../Assets/img6.jpg";
import basket4 from "../../Assets/img3.jpg";
import basket5 from "../../Assets/basket30.jpg";
import basket6 from "../../Assets/img10.jpg";
const posts = [
  {
    // title: "Why You Should Be Worried About the Future of Life",
    // link: "https://wphtmega.com/why-you-should-be-worried-about-the-future-of-life-style-2-2/",
    image: basket1,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
  {
    title: "Prioritizing your digital item to get the most",
    link: "https://wphtmega.com/prioritizing-your-digital-item-to-get-the-most-out-of-your-business-2/",
    image: basket2,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
      "Add this HT Mega Elementor Post slider widget to your blog, and you'll be able to display posts in theLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
  {
    title: "What Life Style Says About Your Personal Style",
    link: "https://wphtmega.com/what-life-style-says-about-your-personal-style/",
    image: basket3,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
    "Add this HT Mega Elementor Post slider widget to your blog, and you'll be able to display posts in theLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
  {
    // title: "Why You Should Be Worried About the Future of Life",
    // link: "https://wphtmega.com/why-you-should-be-worried-about-the-future-of-life-style-2-2/",
    image: basket4,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
    "Add this HT Mega Elementor Post slider widget to your blog, and you'll be able to display posts in theLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
  {
    // title: "Why You Should Be Worried About the Future of Life",
    // link: "https://wphtmega.com/why-you-should-be-worried-about-the-future-of-life-style-2-2/",
    image: basket5,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
    "Add this HT Mega Elementor Post slider widget to your blog, and you'll be able to display posts in theLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
  {
    // title: "Why You Should Be Worried About the Future of Life",
    // link: "https://wphtmega.com/why-you-should-be-worried-about-the-future-of-life-style-2-2/",
    image: basket6,
    category: "Creative",
    author: "Madhusudan",
    date: "22 December 2021",
    description:
    "Add this HT Mega Elementor Post slider widget to your blog, and you'll be able to display posts in theLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim sit amet ligula tincidunt commodo. Duis sed risus sed nisl ultrices tristique. Integer vel metus volutpat, fermentum erat nec, viverra odio. Aliquam nec velit sit amet quam euismod dapibus. Nulla facilisi. Sed at libero condimentum, ultrices nisi ut, ultricies odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ut sapien vel turpis lobortis consequat sed sit amet arcu. Sed in pretium nulla, nec bibendum nisi. Donec ac ipsum ac arcu tincidunt elementum id et sapien. Morbi mattis, velit vitae commodo molestie, erat est commodo justo, nec efficitur ipsum metus vel orci.",
  },
];

const Slick = () => {
  const settings = {
    // dots: true,
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
    <div className="post-slider-container">
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div
            key={index}
            className="htmega-data-title htmega-single-post-slide"
          >
            <div
              className="htmega-post-slider-st-6"
              style={{ height: "80vh", width: "100% !important" }}
            >
              <div className="htmega-post-slider-left ">
                <div className="thumb ">
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
                        <a href="#" className="category creative" style={{color: 'purple', textDecoration: 'none'}}>
                          {post.category}
                        </a>
                      </li>
                    </ul>
                      <p className="w-100" style={{fontSize: '20px'}}>{post.description}</p>
                    {/* <h2>
                      <a href={post.link}>{post.title}</a>
                    </h2> */}
                    <ul className="meta">
                      <li>
                        <i className="fa fa-user-circle"></i>
                        <a href="#">{post.author}</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        {post.date}
                      </li>
                    </ul>
                    {/* <p>{post.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
