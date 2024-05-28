import React, { useState } from "react";
import "./Craftgallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer'
import Img1 from "../../Assets/basket30.jpg";
import Img2 from "../../Assets/img8.jpg";
import Img3 from "../../Assets/img8.jpg";
import Img4 from "../../Assets/basket30.jpg";
import Img5 from "../../Assets/basket29.jpg";
import Img6 from "../../Assets/img8.jpg";
import NavbarComponent from "../Navbar/Navbar";


const Craftgallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      {/* <NavbarComponent/> */}
    <div>

    <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="model"/>
        <FontAwesomeIcon icon={faTimes} onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pict"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt="pict" />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
   
    </>
  );
};

export default Craftgallery;






















// import React, { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import "./Craftgallery.css";

// import image1 from "../../Assets/img1.jpg";
// import image2 from "../../Assets/img2.jpg";
// import image3 from "../../Assets/img3.jpg";
// import image4 from "../../Assets/img4.jpg";
// import image5 from "../../Assets/img5.jpg";
// import image6 from "../../Assets/img6.jpg";

// const images = [image1, image2, image3, image4, image5, image6];
// const imageCaptions = [
//   "Caption 1",
//   "Caption 2",
//   "Caption 3",
//   "Caption 4",
//   "Caption 5",
//   "Caption 6",
// ];

// const Craftgallery = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   return (
//     <div className="gallery-container">
//       <h1>Image Gallery</h1>
//       <div className="image-grid">
//         {images.map((image, index) => (
//           <div key={index} className="image-item" onClick={() => {
//             setIsOpen(true);
//             setPhotoIndex(index);
//           }}>
//             <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
//             <div className="caption">{imageCaptions[index]}</div>
//           </div>
//         ))}
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % images.length)
//           }
//           imageCaption={imageCaptions[photoIndex]}
//         />
//       )}
//     </div>
//   );
// };

// export default Craftgallery;
