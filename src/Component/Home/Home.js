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
            style={{ textAlign: "center", fontSize: "40px"}}
          >
            <span style={{color: '#016A70'}}>Discover </span><span style={{color: '#D2DE32'}}>The</span> <span style={{color: '#016A70'}}>Artistry</span> <span style={{color: '#D2DE32'}}>Of</span> <span style={{color: '#016A70'}}>Craftsmanship</span>
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






















// import React from "react";
// import Footer from "../Footer/Footer";
// import "./Home.css";
// import NavbarComponent from "../Navbar/Navbar";
// import video from "../../Assets/video1.mp4";

// function Home() {
//   return (
//     <div>
//       <NavbarComponent />
//       <div className="video-container">
//         <video controls autoPlay style={{width: '100%', height: '90vh'}}>
//           <source src={video} type="video/mp4" />
//         </video>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

