import React, { useState } from "react";
import "./Craftgallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Img1 from "../../Assets/basket30.jpg";
import Img2 from "../../Assets/img8.jpg";
import Img3 from "../../Assets/img8.jpg";
import Img4 from "../../Assets/basket30.jpg";
import Img5 from "../../Assets/basket29.jpg";
import Img6 from "../../Assets/img8.jpg";

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
          <img src={tempimgSrc} alt="model"style={{marginTop: '10%', height: '83vh', width: '47%'}}/>
          <FontAwesomeIcon icon={faTimes} onClick={() => setModel(false)} style={{top: '20%'}}/>
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
