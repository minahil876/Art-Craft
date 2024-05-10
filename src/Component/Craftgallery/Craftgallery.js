import React, { useState } from "react";
import "./Craftgallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Img1 from "../../Assets/basket10.jpg";
import Img2 from "../../Assets/basket19.jpg";
import Img3 from "../../Assets/basket12.jpg";
import Img4 from "../../Assets/basket13.jpg";
import Img5 from "../../Assets/basket14.jpg";
import Img6 from "../../Assets/basket15.jpg";


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
    </>
  );
};

export default Craftgallery;
